const slider = document.getElementById('angleSlider');
const vector = document.getElementById('vector');
const angleDisplay = document.getElementById('angleDisplay');
const noteBox = document.getElementById('dynamicNote');

// تحديد قيم الزوايا الخاصة والملاحظات لكل خطوة في المؤشر
const specialAngles = [
    { deg: 0,   rad: '0π',   text: 'الزاوية 0: تقع على محور السينات الموجب (بداية الدورة).' },
    { deg: 30,  rad: 'π/6',  text: 'الزاوية 30°: زاوية حادة. Sin(30)=0.5, Cos(30)=√3/2.' },
    { deg: 45,  rad: 'π/4',  text: 'الزاوية 45°: زاوية حادة متساوية الساقين. Sin=Cos=1/√2.' },
    { deg: 60,  rad: 'π/3',  text: 'الزاوية 60°: زاوية حادة. Sin(60)=√3/2, Cos(60)=0.5.' },
    { deg: 90,  rad: 'π/2',  text: 'الزاوية 90°: زاوية قائمة. تقع على محور الصادات الموجب.' },
    { deg: 180, rad: 'π',    text: 'الزاوية 180°: زاوية مستقيمة. تقع على محور السينات السالب.' },
    { deg: 270, rad: '3π/2', text: 'الزاوية 270°: زاوية منعكسة. تقع على محور الصادات السالب.' },
    { deg: 360, rad: '2π',   text: 'الدورة الكاملة: عدنا إلى نقطة البداية (0°).' }
];

slider.addEventListener('input', () => {
    // الحصول على بيانات الزاوية بناءً على خطوة المؤشر
    const angleData = specialAngles[slider.value];
    
    if (angleData) {
        // تحديث النص العلوي
        angleDisplay.innerText = `${angleData.deg}° / ${angleData.rad}`;
        
        // تحريك السهم (ضربنا في -1 لأن CSS يدور مع عقارب الساعة والرياضيات عكسها)
        vector.style.transform = `rotate(${-angleData.deg}deg)`;
        
        // تحديث الملاحظات الجانبية
        noteBox.innerHTML = `<p style="color:#1b5e20; font-weight:bold;">${angleData.text}</p>`;
    }
});
