// ===== NAVIGATION SCROLL & ACTIVE LINK =====
const links = document.querySelectorAll(".navbar a");
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    navbar.classList.remove("active");
    menuToggle.querySelector("i").classList.remove("fa-times");
  });
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.querySelector("i").classList.toggle("fa-times");
});

// ===== STICKY HEADER =====
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-area");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// ===== CONTACT FORM SUBMISSION =====
const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
const form = document.forms['submitToGoogleSheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      msg.innerHTML = "Message Sent Successfully! 💌";
      setTimeout(() => (msg.innerHTML = ""), 4000);
      form.reset();
    })
    .catch(err => console.error('Error!', err.message));
});

// ===== SCROLL REVEAL ANIMATIONS =====
(function addScrollReveal() {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1800,
    delay: 200,
    reset: true
  });

  sr.reveal('.home-text', { origin: 'right' });
  sr.reveal('.profile-photo', { origin: 'left' });
  sr.reveal('.about', { origin: 'bottom' });
  sr.reveal('.skills-grid', { origin: 'bottom' });
  sr.reveal('.timeline-item', { origin: 'left', interval: 200 });
  sr.reveal('.project-card', { origin: 'bottom', interval: 150 });
  sr.reveal('.code-card', { origin: 'bottom', interval: 150 });
  sr.reveal('.achievement-card', { origin: 'bottom', interval: 150 });
  sr.reveal('.contact form', { origin: 'bottom' });
})();
