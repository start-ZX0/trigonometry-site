// ننتظر حتى يتم تحميل عناصر الصفحة بالكامل لتجنب أي أخطاء
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('angleSlider');
    const vector = document.getElementById('vector');
    const angleText = document.getElementById('angleText');
    const radText = document.getElementById('radText');

    // مصفوفة الزوايا المطلوبة فقط (مع الراديان)
    const angles = [
        { deg: 0, rad: "0" },
        { deg: 30, rad: "π/6" },
        { deg: 45, rad: "π/4" },
        { deg: 60, rad: "π/3" },
        { deg: 90, rad: "π/2" },
        { deg: 180, rad: "π" },
        { deg: 270, rad: "3π/2" }
    ];

    // التحقق من وجود الشريط والمؤشر قبل تنفيذ الحدث
    if (slider && vector) {
        slider.addEventListener('input', () => {
            // جلب الزاوية بناءً على موضع الشريط (من 0 إلى 6)
            const selected = angles[slider.value];
            
            // تحديث النصوص إذا كانت موجودة في الـ HTML
            if (angleText) angleText.innerText = `الزاوية: ${selected.deg}°`;
            if (radText) radText.innerText = `rad: ${selected.rad}`;
            
            // تدوير السهم الأحمر (نستخدم القيمة السالبة ليكون الدوران عكس عقارب الساعة كما في الرياضيات)
            vector.style.transform = `translateY(-50%) rotate(${-selected.deg}deg)`;
        });
    }
});
