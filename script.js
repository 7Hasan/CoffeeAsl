// رقم الواتساب الخاص بالمتجر
const STORE_PHONE_NUMBER = "967776425406"; 

// القيم الافتراضية للمنتج المحدد
let currentProduct = "محصول إثيوبيا - يرجاشيف";
let currentPrice = "55 ر.س";

// 1. اختيار المنتج بالتفاعل السريع من الكروت
function selectProduct(cardElement, productName, price) {
  // إزالة حالة التحديد من جميع الكروت
  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.remove('active');
  });

  // إضافة التحديد للكارت الضغوط عليه
  cardElement.classList.add('active');

  currentProduct = productName;
  currentPrice = price;

  // تحديث شارة المنتج المحدد في نموذج الطلب فوراً
  const badge = document.getElementById('selectedProductBadge');
  badge.innerHTML = `المحدد: ${productName} (${price})`;
  
  // أنيميشن ناعم للتأكيد
  badge.style.transform = "scale(1.08)";
  setTimeout(() => badge.style.transform = "scale(1)", 200);
}

// 2. زيادة أو إنقاص الكمية بالتزرار
function changeQty(amount) {
  const qtyInput = document.getElementById('quantity');
  let currentVal = parseInt(qtyInput.value) || 1;
  currentVal += amount;
  if (currentVal < 1) currentVal = 1;
  qtyInput.value = currentVal;
}

// 3. إظهار/إخفاء قسم الإهداء
function toggleGiftMode() {
  const isGift = document.getElementById('isGift').checked;
  const giftSection = document.getElementById('giftSection');
  
  if (isGift) {
    giftSection.classList.add('active');
  } else {
    giftSection.classList.remove('active');
  }
}

// 4. معالجة الإرسال وإنشاء رابط الواتساب المنسق
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const quantity = document.getElementById('quantity').value;
  const clientName = document.getElementById('clientName').value;
  const clientPhone = document.getElementById('clientPhone').value;
  const clientAddress = document.getElementById('clientAddress').value;
  const notes = document.getElementById('notes').value || "لا يوجد";
  const isGift = document.getElementById('isGift').checked;

  let giftDetails = "";
  if (isGift) {
    const giftMessage = document.getElementById('giftMessage').value || "بدون رسالة مكتوبة";
    giftDetails = `\n🎁 *طلب إهداء خاص:*\n• *الرسالة:* "${giftMessage}"\n`;
  }

  // صياغة الرسالة الفاخرة المنسقة
  const message = 
`✨ *طلب جديد عبر المتجر الإلكتروني* ✨

☕ *المنتج:* ${currentProduct}
💰 *السعر:* ${currentPrice}
📦 *الكمية:* ${quantity} عبوة (250g)

👤 *بيانات العميل:*
• *الاسم:* ${clientName}
• *الجوال:* ${clientPhone}
• *العنوان:* ${clientAddress}
${giftDetails}
📝 *ملاحظات:* ${notes}

---
*تم الإرسال بنجاح من واجهة المتجر*`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
});
