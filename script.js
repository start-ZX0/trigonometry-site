const slider = document.getElementById('angleSlider');
const vector = document.getElementById('vector');
const angleText = document.getElementById('angleText');
const noteBox = document.getElementById('dynamicNote');

const angleInfo = {
    30: "الزاوية 30°: زاوية حادة. جيبها (Sin) يساوي 0.5. تسمى π/6 بالراديان.",
    45: "الزاوية 45°: زاوية حادة متساوية الساقين. Sin و Cos متساويان (1/√2).",
    60: "الزاوية 60°: زاوية حادة. جيب تمامها (Cos) يساوي 0.5. تسمى π/3.",
    90: "الزاوية 90°: زاوية قائمة. المتجه ينطبق تماماً على محور الصادات الموجب.",
    180: "الزاوية 180°: زاوية مستقيمة. تقع على محو السينات السالب. قيمتها π راديان.",
    270: "الزاوية 270°: زاوية منعكسة. تقع على محور الصادات السالب.",
    360: "الزاوية 360°: دورة كاملة. تعادل الزاوية 0° تماماً."
};

slider.addEventListener('input', () => {
    let v = slider.value;
    angleText.innerText = v + "°";
    vector.style.transform = `rotate(${-v}deg)`;

    if (angleInfo[v]) {
        noteBox.innerHTML = `<p style="color:#1b5e20; font-weight:bold;">${angleInfo[v]}</p>`;
    } else {
        noteBox.innerHTML = `<p>الزاوية ${v}°: استمر في التحريك للوصول إلى الزوايا الخاصة (30, 45, 60, 90...).</p>`;
    }
});
