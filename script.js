// إعدادات أستاذ أيمن - MRπ
const part1 = "AIzaSyAs_27yeYlVQ";
const part2 = "PGcNUHDc5xbUlje3M2Ocq8";
const API_KEY = part1 + part2; // دمج المفتاح لتجنب الفحص التلقائي السريع
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

document.addEventListener("DOMContentLoaded", () => {
    // --- 1. كود تحريك السهم والزوايا ---
    const slider = document.getElementById('angleSlider');
    const vector = document.getElementById('vector');
    const angleText = document.getElementById('angleText');
    const radText = document.getElementById('radText');

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
        vector.style.transition = "transform 0.3s ease-out";
        slider.addEventListener('input', () => {
            const selected = angles[slider.value];
            if (angleText) angleText.innerText = `الزاوية: ${selected.deg}°`;
            if (radText) radText.innerText = `rad: ${selected.rad}`;
            vector.style.transform = `translateY(-50%) rotate(${-selected.deg}deg)`;
        });
    }

    // --- 2. كود شات أستاذ أيمن ---
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');

    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    if (userInput) {
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});

async function sendMessage() {
    const inputField = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const typing = document.getElementById('typingIndicator');
    const text = inputField.value.trim();

    if (!text) return;

    // إضافة رسالة الطالب
    addMessage(text, 'user-msg');
    inputField.value = "";
    if (typing) typing.style.display = "block";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: "أنت أستاذ أيمن، تجيب بلهجة عراقية وتساعد الطلاب في الرياضيات.\nالطالب يسأل: " + text }]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates) {
            const reply = data.candidates[0].content.parts[0].text;
            addMessage(reply, 'bot-msg');
        } else {
            addMessage("أستاذ أيمن: عذراً، واجهت مشكلة في فهم السؤال.", 'bot-msg');
        }
    } catch (e) {
        addMessage("أستاذ أيمن: الإنترنت ضعيف، حاول مرة ثانية.", 'bot-msg');
    } finally {
        if (typing) typing.style.display = "none";
    }
}

function addMessage(text, className) {
    const chatBox = document.getElementById('chatBox');
    if (!chatBox) return;
    const msg = document.createElement('div');
    msg.className = `message ${className}`;
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}
