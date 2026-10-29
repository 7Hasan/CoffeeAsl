// أضف رقم الواتساب الخاص بمتجرك هنا مع رمز الدولة (بدون علامة + أو أصفار في البداية)
// مثال لمصر: 201000000000 | مثال للسعودية: 966500000000
const STORE_PHONE_NUMBER = "967776425406"; 

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // جلب القيم من حقول النموذج
  const product = document.getElementById('productSelect').value;
  const quantity = document.getElementById('quantity').value;
  const clientName = document.getElementById('clientName').value;
  const clientPhone = document.getElementById('clientPhone').value;
  const clientAddress = document.getElementById('clientAddress').value;
  const notes = document.getElementById('notes').value || "لا يوجد";

  // صياغة نص الرسالة
  const message = 
`☕ *طلب جديد من المتجر*

*المنتج المطلوب:* ${product}
*الكمية:* ${quantity}

*بيانات العميل:*
• *الاسم:* ${clientName}
• *رقم التواصل:* ${clientPhone}
• *العنوان:* ${clientAddress}

*ملاحظات:*
${notes}

---
*تم إرسال الطلب عبر الموقع الإلكتروني*`;

  // ترميز النص ليتوافق مع الروابط (URL Encoding)
  const encodedMessage = encodeURIComponent(message);

  // إنشاء رابط الواتساب وتحويل العميل إليه
  const whatsappUrl = `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
});
