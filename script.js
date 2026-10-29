// رقم الواتساب الخاص بالمتجر (عدّله برقمك الحقيقي)
const STORE_PHONE_NUMBER = "967776425406"; 

// 1. ميزة مستكشف القهوة الذكي
function recommendCoffee(type) {
  const resultDiv = document.getElementById('quizResult');
  if (type === 'filter') {
    resultDiv.innerHTML = "🌟 ننصحك بـ: <b>محصول إثيوبيا - يرجاشيف</b> (إيحاءات فواكهية منعشة مثالية للفلتر).";
  } else if (type === 'espresso') {
    resultDiv.innerHTML = "🌟 ننصحك بـ: <b>خلطة الإسبريسو الخاصة</b> (قوام غني وثقيل يتناغم تماماً مع الحليب).";
  } else {
    resultDiv.innerHTML = "🌟 ننصحك بـ: <b>محصول كولومبيا - سان أغوستين</b> (توازن مذهل يناسب جميع الأساليب).";
  }
}

// 2. التحكم في تبديل نوع الطلب (مفرد أو اشتراك)
function toggleOrderType() {
  const orderType = document.getElementById('orderType').value;
  const productGroup = document.getElementById('productGroup');
  const subGroup = document.getElementById('subGroup');
  const quantityGroup = document.getElementById('quantityGroup');

  if (orderType === 'subscription') {
    productGroup.classList.add('hidden');
    subGroup.classList.remove('hidden');
    quantityGroup.classList.add('hidden');
  } else {
    productGroup.classList.remove('hidden');
    subGroup.classList.add('hidden');
    quantityGroup.classList.remove('hidden');
  }
}

// 3. التحكم في إظهار حقول الهدية
function toggleGiftFields() {
  const isGift = document.getElementById('isGift').checked;
  const giftFields = document.getElementById('giftFields');
  const addressGroup = document.getElementById('addressGroup');

  if (isGift) {
    giftFields.classList.remove('hidden');
    addressGroup.classList.add('hidden'); // العنوان الأساسي يتحول لعنوان المستلم في خانة الهدية
  } else {
    giftFields.classList.add('hidden');
    addressGroup.classList.remove('hidden');
  }
}

// 4. معالجة إرسال النموذج وتنسيق رسالة الواتساب
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const orderType = document.getElementById('orderType').value;
  const clientName = document.getElementById('clientName').value;
  const clientPhone = document.getElementById('clientPhone').value;
  const notes = document.getElementById('notes').value || "لا يوجد";
  const isGift = document.getElementById('isGift').checked;

  let orderDetails = "";

  if (orderType === 'subscription') {
    const subPlan = document.getElementById('subPlan').value;
    orderDetails = `⭐ *نوع الطلب:* اشتراك شهري\n*الباقة:* ${subPlan}`;
  } else {
    const product = document.getElementById('productSelect').value;
    const quantity = document.getElementById('quantity').value;
    orderDetails = `🫘 *نوع الطلب:* شراء حبوب قهوة\n*المنتج:* ${product}\n*الكمية:* ${quantity} عبوة (250ج)`;
  }

  let deliveryInfo = "";
  if (isGift) {
    const giftMsg = document.getElementById('giftMessage').value || "بدون كرت";
    const recipientAddr = document.getElementById('recipientAddress').value;
    deliveryInfo = `🎁 *طلب هدية خاصة!*\n• *رسالة الكرت:* "${giftMsg}"\n• *عنوان المستلم:* ${recipientAddr}`;
  } else {
    const clientAddress = document.getElementById('clientAddress').value;
    deliveryInfo = `📍 *عنوان التوصيل:* ${clientAddress}`;
  }

  // صياغة الرسالة النهائية للواتساب
  const message = 
`☕ *طلب جديد من متجر الروستري*

${orderDetails}

*بيانات العميل المُهدي/المشتري:*
• *الاسم:* ${clientName}
• *رقم الجوال:* ${clientPhone}

${deliveryInfo}

*ملاحظات إضافية:*
${notes}

---
*تم إرسال الطلب عبر الموقع الإلكتروني الفاخر*`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
});
