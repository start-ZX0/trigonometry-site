const slider = document.getElementById('angleSlider');
const vector = document.getElementById('vector');
const angleDisplay = document.getElementById('angleDisplay');
const sinVal = document.getElementById('sinVal');
const cosVal = document.getElementById('cosVal');
const tanVal = document.getElementById('tanVal');

// تم ترتيب البيانات بدقة لتلافي الخلط بين 0 و 360
const data = [
    { d: 0, s: "0", c: "1", t: "0" },          // الموضع 0
    { d: 30, s: "1/2", c: "√3/2", t: "√3/3" },
    { d: 45, s: "√2/2", c: "√2/2", t: "1" },
    { d: 60, s: "√3/2", c: "1/2", t: "√3" },
    { d: 90, s: "1", c: "0", t: "غير معرف" },
    { d: 180, s: "0", c: "-1", t: "0" },
    { d: 270, s: "-1", c: "0", t: "غير معرف" },
    { d: 360, s: "0", c: "1", t: "0" }         // الموضع 7
];

slider.addEventListener('input', () => {
    const v = data[slider.value];
    angleDisplay.innerText = `الزاوية المختارة: ${v.d}°`;
    // تدوير السهم (نضرب في -1 ليكون الدوران عكس عقارب الساعة رياضياً)
    vector.style.transform = `rotate(${-v.d}deg)`;
    sinVal.innerText = v.s;
    cosVal.innerText = v.c;
    tanVal.innerText = v.t;
});
