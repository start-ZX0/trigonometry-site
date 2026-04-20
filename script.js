const slider = document.getElementById('angleSlider');
const vector = document.getElementById('vector');
const angleText = document.getElementById('angleText');
const radText = document.getElementById('radText');

// الزوايا المطلوبة فقط
const angles = [
    { deg: 0, rad: "0" },
    { deg: 30, rad: "π/6" },
    { deg: 45, rad: "π/4" },
    { deg: 60, rad: "π/3" },
    { deg: 90, rad: "π/2" },
    { deg: 180, rad: "π" },
    { deg: 270, rad: "3π/2" }
];

slider.addEventListener('input', () => {
    const selected = angles[slider.value];
    angleText.innerText = `الزاوية: ${selected.deg}°`;
    radText.innerText = `rad: ${selected.rad}`;
    
    // تدوير السهم (نستخدم القيمة السالبة للدوران عكس عقارب الساعة)
    vector.style.transform = `rotate(${-selected.deg}deg)`;
});
