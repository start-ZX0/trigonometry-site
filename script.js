const slider = document.getElementById('angleSlider');
const vector = document.getElementById('vector');
const angleDisplay = document.getElementById('angleDisplay');
const sinVal = document.getElementById('sinVal');
const cosVal = document.getElementById('cosVal');
const tanVal = document.getElementById('tanVal');

const angleData = [
    { deg: 0, s: "0", c: "1", t: "0" },
    { deg: 30, s: "1/2", c: "√3/2", t: "√3/3" },
    { deg: 45, s: "√2/2", c: "√2/2", t: "1" },
    { deg: 60, s: "√3/2", c: "1/2", t: "√3" },
    { deg: 90, s: "1", c: "0", t: "∞" },
    { deg: 180, s: "0", c: "-1", t: "0" },
    { deg: 270, s: "-1", c: "0", t: "∞" },
    { deg: 360, s: "0", c: "1", t: "0" }
];

slider.addEventListener('input', () => {
    const val = angleData[slider.value];
    angleDisplay.innerText = `الزاوية المختارة: ${val.deg}°`;
    vector.style.transform = `rotate(${-val.deg}deg)`;
    
    sinVal.innerText = val.s;
    cosVal.innerText = val.c;
    tanVal.innerText = val.t;
});
