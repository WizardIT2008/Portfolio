document.addEventListener("DOMContentLoaded", () => {

  // 🔥 menu toggle
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.onclick = () => {
      nav.classList.toggle("active");
    };
  }

  // 🔥 typing effect (กัน error หน้าอื่น)
  const typingEl = document.querySelector(".typing");

  if (typingEl) {
    const text = ["Front-End", "Developer", "Freelancer"];
    let i = 0;
    let j = 0;
    let current = "";
    let isDeleting = false;

    function type() {
      current = text[i];

      if (!isDeleting) {
        typingEl.textContent = current.substring(0, j++);
      } else {
        typingEl.textContent = current.substring(0, j--);
      }

      if (j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }

      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
      }

      setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
  }

  // 🔥 skill animation
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    if (width) {
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    }
  });

});

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("ส่งข้อความเรียบร้อยแล้ว! ✅");
    form.reset();
  });
}