// دالة لجلب البيانات من API
async function fetchPCPartsPrices() {
    try {
        // استبدل هذا الرابط برابط API الفعلي
        const response = await fetch('pc_parts.json');  // هنا يمكنك استخدام API حقيقي إذا كان متاحًا
        
        // تحقق من نجاح الاستجابة
        if (!response.ok) {
            throw new Error('فشل في تحميل البيانات');
        }
        
        // تحويل البيانات إلى JSON
        const data = await response.json();
        
        // تحديث قسم الأسعار في الصفحة
        updatePCPartsSection(data);
    } catch (error) {
        console.error('حدث خطأ:', error);
    }
}

// دالة لتحديث قسم الأسعار في الصفحة
function updatePCPartsSection(data) {
    const pcPartsSection = document.getElementById('pc-parts-content');
    
    // تنظيف القسم قبل إضافة البيانات الجديدة
    pcPartsSection.innerHTML = '';
    
    // إضافة الأسعار من البيانات المسترجعة
    data.forEach(part => {
        const partDiv = document.createElement('div');
        partDiv.classList.add('pc-part');
        
        partDiv.innerHTML = `
            <h4>${part.name}</h4>
            <p><strong>السعر في أمريكا:</strong> ${part.price_us}</p>
            <p><strong>السعر في مصر:</strong> ${part.price_eg}</p>
        `;
        
        pcPartsSection.appendChild(partDiv);
    });
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = fetchPCPartsPrices;
