// ننتظر تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById('angleSlider');
    const vector = document.getElementById('vector');
    const angleText = document.getElementById('angleText');
    const radText = document.getElementById('radText');

    // مصفوفة الزوايا والراديان (مبنية على الصور التي رفعتها)
    const angles = [
        { deg: 0, rad: "0" },
        { deg: 30, rad: "π/6" },
        { deg: 45, rad: "π/4" },
        { deg: 60, rad: "π/3" },
        { deg: 90, rad: "π/2" },
        { deg: 180, rad: "π" },
        { deg: 270, rad: "3π/2" }
    ];

    if (slider && vector) {
        // إضافة نعومة لحركة السهم
        vector.style.transition = "transform 0.3s ease-out";

        slider.addEventListener('input', () => {
            const selected = angles[slider.value];
            
            if (angleText) angleText.innerText = `الزاوية: ${selected.deg}°`;
            if (radText) radText.innerText = `rad: ${selected.rad}`;
            
            // تعديل الدوران: نستخدم -90 للبدء من الأعلى أو 0 للبدء من اليمين
            // الرياضيات تبدأ من اليمين (0°) وتدور عكس العقارب
            vector.style.transform = `translateY(-50%) rotate(${-selected.deg}deg)`;
        });
    }
});
