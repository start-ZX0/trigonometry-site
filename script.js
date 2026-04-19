const slider = document.getElementById('angleSlider');
const vector = document.getElementById('vector');
const angleDisplay = document.getElementById('angleDisplay');
const noteBox = document.getElementById('dynamicNote');
const sinVal = document.getElementById('sinVal');
const cosVal = document.getElementById('cosVal');
const tanVal = document.getElementById('tanVal');

const data = [
    { deg: 0, sin: "0", cos: "1", tan: "0", note: "الزاوية 0: تقع على محور السينات الموجب." },
    { deg: 30, sin: "1/2", cos: "√3/2", tan: "√3/3", note: "الزاوية 30: تسمى زاوية حادة شهيرة." },
    { deg: 45, sin: "√2/2", cos: "√2/2", tan: "1", note: "الزاوية 45: يتساوى فيها الجيب وجيب التمام." },
    { deg: 60, sin: "√3/2", cos: "1/2", tan: "√3", note: "الزاوية 60: متممة للزاوية 30." },
    { deg: 90, sin: "1", cos: "0", tan: "غير معرف", note: "الزاوية 90: قائمة، تنطبق على محور الصادات." },
    { deg: 180, sin: "0", cos: "-1", tan: "0", note: "الزاوية 180: زاوية مستقيمة (π راديان)." },
    { deg: 270, sin: "-1", cos: "0", tan: "غير معرف", note: "الزاوية 270: تنطبق على محور الصادات السالب." },
    { deg: 360, sin: "0", cos: "1", tan: "0", note: "360 درجة: عودة لنقطة البداية." }
];

slider.addEventListener('input', () => {
    const angle = data[slider.value];
    angleDisplay.innerText = `الزاوية: ${angle.deg}°`;
    vector.style.transform = `rotate(${-angle.deg}deg)`;
    
    sinVal.innerText = angle.sin;
    cosVal.innerText = angle.cos;
    tanVal.innerText = angle.tan;
    
    noteBox.innerHTML = `<p>${angle.note}</p>`;
});
