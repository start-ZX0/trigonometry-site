// إعدادات الـ API الخاصة بأستاذ أيمن
const API_KEY = "AIzaSyAs_27yeYlVQPGcNUHDc5xbUlje3M2Ocq8"; // المفتاح الفعال من صورتك
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// تعليمات شخصية أستاذ أيمن
const promptInstructions = "أنت أستاذ أيمن، خبير في الرياضيات والدوال المثلثية. تجيب بلهجة عراقية محببة أو باللغة الإنجليزية حسب طلب المستخدم. هدفك مساعدة الطلاب في موقع MRπ.";

document.addEventListener("DOMContentLoaded", () => {
    // --- أولاً: كود التحكم في الزوايا (Slider) ---
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
        vector.style.transition = "transform 0.3s ease-out"; // حركة سلسة للسهم
        slider.addEventListener('input', () => {
            const selected = angles[slider.value];
            if (angleText) angleText.innerText = `الزاوية: ${selected.deg}°`;
            if (radText) radText.innerText = `rad: ${selected.rad}`;
            // الدوران ليتناسب مع صور الموقع
            vector.style.transform = `translateY(-50%) rotate(${-selected.deg}deg)`;
        });
    }

    // --- ثانياً: كود شات أستاذ أيمن ---
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');

    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});

// دالة إرسال الرسائل ومعالجة الأخطاء
async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const typingIndicator = document.getElementById('typingIndicator');
    const text = userInput.value.trim();
    
    if (!text) return;

    addMessage(text, 'user-msg');
    userInput.value = "";
    if (typingIndicator) typingIndicator.style.display = "block";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `${promptInstructions}\n\nسؤال الطالب: ${text}` }]
                }]
            })
        });

        const data = await response.json();
        
        if (response.ok && data.candidates) {
            const botReply = data.candidates[0].content.parts[0].text;
            addMessage(botReply, 'bot-msg');
        } else {
            // معالجة الخطأ التقني من الـ API مباشرة
            const errorMsg = data.error ? data.error.message : "حدث خطأ غير متوقع";
            addMessage(`أستاذ أيمن: عذراً، ${errorMsg}`, 'bot-msg');
        }
    } catch (error) {
        addMessage("أستاذ أيمن: مشكلة في الاتصال، تأكد من الإنترنت وحاول مجدداً.", 'bot-msg');
    } finally {
        if (typingIndicator) typingIndicator.style.display = "none";
    }
}

// دالة إضافة الرسائل للواجهة
function addMessage(text, type) {
    const chatBox = document.getElementById('chatBox');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}`;
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
