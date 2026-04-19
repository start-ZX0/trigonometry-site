const slider = document.getElementById('angleSlider');
const vector = document.getElementById('vector');
const angleText = document.getElementById('angleText');
const noteBox = document.getElementById('dynamicNote');

const notes = {
    0: "الزاوية 0: تقع على محور السينات الموجب. Sin(0)=0.",
    90: "الزاوية 90: زاوية قائمة على محور الصادات الموجب. Sin(90)=1.",
    180: "الزاوية 180: زاوية مستقيمة (π راديان). Sin(180)=0.",
    270: "الزاوية 270: تقع على محور الصادات السالب. Sin(270)=-1.",
    360: "الدورة الكاملة: عدنا إلى نقطة البداية (2π راديان)."
};

slider.addEventListener('input', () => {
    let val = slider.value;
    angleText.innerText = val + "°";
    // تحريك السهم (ضربنا في -1 لأن CSS يدور مع عقارب الساعة والرياضيات عكسها)
    vector.style.transform = `rotate(${-val}deg)`;

    // تغيير الملاحظات عند الزوايا الرئيسية
    if (notes[val]) {
        noteBox.innerHTML = `<p>${notes[val]}</p>`;
        noteBox.style.backgroundColor = "#e8f5e9";
    } else {
        noteBox.innerHTML = `<p>الزاوية الحالية هي ${val} درجة. استمر في التحريك لرؤية الزوايا الخاصة.</p>`;
        noteBox.style.backgroundColor = "white";
    }
});
