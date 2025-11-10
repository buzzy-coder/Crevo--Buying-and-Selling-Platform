const overlay = document.getElementById('scrollOverlay');
const header = document.querySelector("header");
const hero = document.querySelector(".hero-section");

// Section offsets for smooth color transitions
const sectionOffsets = {
    home: 0,
    gallery: document.getElementById('gallery').offsetTop - 200,
    artists: document.getElementById('artists').offsetTop - 200,
    blogs: document.getElementById('blogs').offsetTop - 200,
    contact: document.getElementById('contact').offsetTop - 200
};

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight - 100;

    // === Scroll Overlay Gradient Transitions ===
    if (scrollY < sectionOffsets.gallery) {
        overlay.style.background = 'linear-gradient(135deg, #fce1ec, #e5d4ff)';
    } else if (scrollY >= sectionOffsets.gallery && scrollY < sectionOffsets.artists) {
        overlay.style.background = 'linear-gradient(135deg, #dbe9ff, #d0f0ff)';
    } else if (scrollY >= sectionOffsets.artists && scrollY < sectionOffsets.blogs) {
        overlay.style.background = 'linear-gradient(135deg, #ede2ff, #cce7ff)';
    } else if (scrollY >= sectionOffsets.blogs && scrollY < sectionOffsets.contact) {
        overlay.style.background = 'linear-gradient(135deg, #fff2ff, #f7e5ff)';
    } else {
        overlay.style.background = 'linear-gradient(135deg, #d0fff2, #b3f3e6)';
    }

    // === Navbar Visibility ===
    if (scrollY > heroHeight) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
});

const slides = document.querySelectorAll('.hero-slider .slide');
let current = 0;

function changeSlide() {
    slides[current].classList.remove('active');
    slides[current].classList.add('prev');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');

    // Reset the previous slide after animation
    setTimeout(() => {
        slides.forEach(slide => slide.classList.remove('prev'));
    }, 1000);
}

setInterval(changeSlide, 4000); // change every 4 seconds

const chatIcon = document.getElementById("chatButton"); // your existing icon
const chatBox = document.getElementById("chatbot-box");
const closeBtn = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

// Toggle chatbot popup
chatIcon.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
});

closeBtn.addEventListener("click", () => {
    chatBox.style.display = "none";
});

// Send message
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    const userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.textContent = message;
    chatBody.appendChild(userMsg);

    userInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulated bot response
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-msg";
        botMsg.textContent = "Thanks for reaching out! We'll get back to you soon 💜";
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 700);
}



