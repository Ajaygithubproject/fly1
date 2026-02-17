// ================= IMAGE SLIDER =================

// ================= IMAGE SLIDER =================

const hero = document.querySelector(".hero");

const images = [
  "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1920&q=80", // Australia
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1920&q=80", // Canada
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", // Travel Beach
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&q=80", // City Travel
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"  // Mountains Travel
];

let i = 0;

function changeBackground(){
  hero.style.backgroundImage = `url('${images[i]}')`;
  i = (i + 1) % images.length;
}

setInterval(changeBackground, 4000);
changeBackground();



// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    const answer = item.querySelector(".faq-answer");
    if(item.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});
 //===form==
 document.getElementById("whatsappForm").addEventListener("submit", function(e){
  e.preventDefault();

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var date = document.getElementById("date").value;
  var visa = document.getElementById("visa").value;
  var message = document.getElementById("message").value;

  var whatsappNumber = "919626877940"; // 🔴 CHANGE TO YOUR NUMBER

  var text = `New Enquiry from Website:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Country: ${country}%0A
Travel Date: ${date}%0A
Visa Type: ${visa}%0A
Message: ${message}`;

  var url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, "_blank");
});



function toggleChat(){
  var chat = document.getElementById("chatbox");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
  chat.style.display === "flex" && (chat.style.flexDirection = "column");
}

function sendMessage(){
  var input = document.getElementById("userInput");
  var text = input.value.trim();
  if(text === "") return;

  var chatBody = document.getElementById("chatBody");

  // User message
  chatBody.innerHTML += `<div class="user-msg">${text}</div>`;

  input.value = "";

  setTimeout(() => {
    chatBody.innerHTML += `<div class="bot-msg">${getReply(text)}</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 600);
}

function getReply(msg){
  msg = msg.toLowerCase();

  if(msg.includes("visa"))
    return "We provide tourist visas for Australia, Canada, UK and more 🌍";

  if(msg.includes("price") || msg.includes("cost"))
    return "Our visa packages start from affordable pricing. Contact us on WhatsApp for details 📲";

  if(msg.includes("contact") || msg.includes("phone"))
    return "You can call us at +91 9626877940 ☎️";

  if(msg.includes("whatsapp"))b
    return "Chat with us on WhatsApp: https://wa.me/919626877940";

  return "Thanks for your message! Our team will assist you shortly ✨";
}