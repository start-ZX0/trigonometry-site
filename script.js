const slider = document.getElementById('angleSlider');
const vector = document.getElementById('vector');
const angleDisplay = document.getElementById('angleDisplay');
const sinVal = document.getElementById('sinVal');
const cosVal = document.getElementById('cosVal');
const tanVal = document.getElementById('tanVal');

// ترتيب الزوايا الشهيرة والمقيمة المثلثية بدقة
const angleData = [
    { deg: 0, s: "0", c: "1", t: "0" },
    { deg: 30, s: "1/2", c: "√3/2", t: "√3/3" },
    { deg: 45, s: "√2/2", c: "√2/2", t: "1" },
    { deg: 60, s: "√3/2", c: "1/2", t: "√3" },
    { deg: 90, s: "1", c: "0", t: "<strong>غير معرف</strong>" },
    { deg: 180, s: "0", c: "-1", t: "0" },
    { deg: 270, s: "-1", c: "0", t: "<strong>غير معرف</strong>" },
    { deg: 360, s: "0", c: "1", t: "0" }
];

// التأكد من أن جميع العناصر موجودة قبل تفعيل الكود
if (slider && vector && angleDisplay && sinVal && cosVal && tanVal) {
    slider.addEventListener('input', () => {
        // الحصول على بيانات الزاوية بناءً على قيمة المؤشر
        const val = angleData[slider.value];
        
        // تحديث النص العلوي
        angleDisplay.innerText = `الزاوية المختارة: ${val.deg}°`;
        
        // تدوير السهم عكس اتجاه عقارب الساعة (الاتجاه الرياضي الصحيح)
        // ضربنا في -1 لأن CSS يدور مع عقارب الساعة والرياضيات عكسها
        vector.style.transform = `rotate(${-val.deg}deg)`;
        
        // تحديث قيم النسب المثلثية
        sinVal.innerText = val.s;
        cosVal.innerText = val.c;
        tanVal.innerHTML = val.t; // استخدام innerHTML للقيم "غير معروفة" الجريئة
    });
}
