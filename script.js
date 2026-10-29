const STORE_PHONE_NUMBER = "966500000000"; 
let cart = [];

// متغيرات مؤقتة لنتيجة الكويز
let quizRecommendation = { name: "محصول إثيوبيا - يرجاشيف", price: 55 };

// 🎯 منطق مستكشف القهوة الذكي (Quiz)
function nextQuizStep(stepNumber, choice) {
  document.getElementById(`step${stepNumber}`).classList.remove('active');
  
  if (stepNumber === 1) {
    document.getElementById('step2').classList.add('active');
  } else if (stepNumber === 2) {
    document.getElementById('step3').classList.add('active');
  }
}

function finishQuiz(acidityChoice) {
  document.getElementById('step3').classList.remove('active');
  
  // تخصيص النتيجة بناءً على اختيارات العميل
  const titleEl = document.getElementById('recommendedTitle');
  const descEl = document.getElementById('recommendedDesc');

  if (acidityChoice === 'خفيف منعش') {
    quizRecommendation = { name: "محصول إثيوبيا - يرجاشيف (فلتر)", price: 55 };
    titleEl.innerText = "محصول إثيوبيا - يرجاشيف";
    descEl.innerText = "خيارك المنعش ذو الإيحاءات الفواكهية والياسمين سيعطيك كوباً نابضاً بالحيوية.";
  } else {
    quizRecommendation = { name: "خلطة الإسبريسو الفاخرة", price: 65 };
    titleEl.innerText = "خلطة الإسبريسو الفاخرة";
    descEl.innerText = "قوام غني وثقيل يتناغم بجنون مع مشروبات الحليب والإسبريسو.";
  }

  document.getElementById('quizResultStep').classList.add('active');
}

function resetQuiz() {
  document.getElementById('quizResultStep').classList.remove('active');
  document.getElementById('step1').classList.add('active');
}

function addRecommendedToCart() {
  addToCart(quizRecommendation.name, quizRecommendation.price);
}

// 🎁 2. إضافة اشتراك صندوق القهوة للسلة
function addSubscriptionToCart() {
  const selectedPlan = document.querySelector('input[name="subPlan"]:checked');
  if (!selectedPlan) return;

  let planName = selectedPlan.value;
  let price = planName.includes('290') ? 290 : 550;

  addToCart(`⭐ [اشتراك] ${planName}`, price);
}

// السلة الجانبية
function addToCart(productName, price) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ name: productName, price: price, qty: 1 });
  }
  updateCartUI();
  toggleCartDrawer();
}

function changeCartQty(productName, amount) {
  const item = cart.find(i => i.name === productName);
  if (item) {
    item.qty += amount;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.name !== productName);
    }
  }
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById('cartItemsList');
  const cartBadge = document.getElementById('cartBadge');
  const cartTotalPrice = document.getElementById('cartTotalPrice');

  cartList.innerHTML = "";
  let totalCount = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    cartList.innerHTML = `<p style="text-align:center; color: var(--text-secondary); margin-top:2rem;">السلة فارغة حالياً ☕</p>`;
  } else {
    cart.forEach(item => {
      totalCount += item.qty;
      totalPrice += item.price * item.qty;

      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>${item.price} ر.س</span>
        </div>
        <div class="cart-item-actions">
          <button onclick="changeCartQty('${item.name}', -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeCartQty('${item.name}', 1)">+</button>
        </div>
      `;
      cartList.appendChild(row);
    });
  }

  cartBadge.innerText = totalCount;
  cartTotalPrice.innerText = `${totalPrice} ر.س`;
}

function toggleCartDrawer() {
  document.getElementById('cartDrawer').classList.toggle('active');
}

function scrollToCheckout() {
  toggleCartDrawer();
  document.querySelector('.checkout-card').scrollIntoView({ behavior: 'smooth' });
}

function toggleGiftMode() {
  const isGift = document.getElementById('isGift').checked;
  const giftSection = document.getElementById('giftSection');
  const normalAddressBox = document.getElementById('normalAddressBox');
  
  if (isGift) {
    giftSection.classList.add('active');
    normalAddressBox.style.display = 'none';
  } else {
    giftSection.classList.remove('active');
    normalAddressBox.style.display = 'flex';
  }
}

// إرسال الطلب للواتساب
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("الرجاء إضافة منتج أو اشتراك واحد على الأقل إلى السلة قبل إرسال الطلب!");
    toggleCartDrawer();
    return;
  }

  const clientName = document.getElementById('clientName').value;
  const clientPhone = document.getElementById('clientPhone').value;
  const notes = document.getElementById('notes').value || "لا يوجد";
  const isGift = document.getElementById('isGift').checked;

  let productsSummary = "";
  let overallTotal = 0;
  cart.forEach((item, index) => {
    let itemTotal = item.price * item.qty;
    overallTotal += itemTotal;
    productsSummary += `${index + 1}. *${item.name}* \n   الكمية: ${item.qty} | السعر: ${itemTotal} ر.س\n`;
  });

  let deliveryOrGiftDetails = "";
  if (isGift) {
    const recipientName = document.getElementById('recipientName').value || "غير متوفر";
    const recipientPhone = document.getElementById('recipientPhone').value || "غير متوفر";
    const recipientAddress = document.getElementById('recipientAddress').value || "غير متوفر";
    const giftMessage = document.getElementById('giftMessage').value || "بدون كرت";

    deliveryOrGiftDetails = 
`🎁 *تفاصيل الإهداء (تغليف خاص):*
• *اسم المُهدى إليه (المستلم):* ${recipientName}
• *رقم جوال المستلم:* ${recipientPhone}
• *عنوان المستلم:* ${recipientAddress}
• *نص الكرت:* "${giftMessage}"`;
  } else {
    const clientAddress = document.getElementById('clientAddress').value || "غير متوفر";
    deliveryOrGiftDetails = `📍 *عنوان التوصيل الخاص بك:* ${clientAddress}`;
  }

  const message = 
`✨ *طلب جديد من متجر الروستري* ✨

📦 *قائمة المنتجات/الاشتراكات:*
${productsSummary}
💰 *المجموع الكلي:* *${overallTotal} ر.س*

👤 *بيانات المُهدي / المشترك:*
• *الاسم:* ${clientName}
• *رقم التواصل:* ${clientPhone}

${deliveryOrGiftDetails}

📝 *ملاحظات إضافية:* ${notes}

---
*تم إرسال الطلب بنجاح عبر المتجر الإلكتروني الفاخر*`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
});
