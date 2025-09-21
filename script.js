// Typing Effect
const typingText = document.getElementById("typing-text");
const roles = ["Web Developer", "Game Enthusiast", "Problem Solver"];
let i = 0, j = 0;

function typeEffect() {
  if (j < roles[i].length) {
    typingText.innerHTML += roles[i][j];
    j++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingText.innerHTML = "";
      j = 0;
      i = (i + 1) % roles.length;
      typeEffect();
    }, 1500);
  }
}
typeEffect();

// Sticky Nav Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Smooth Scroll
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// GPA Sort
document.getElementById("sort-gpa").addEventListener("click", () => {
  const table = document.getElementById("edu-table");
  const rows = Array.from(table.rows).slice(1);
  rows.sort((a, b) => b.cells[3].innerText - a.cells[3].innerText);
  rows.forEach(row => table.appendChild(row));
});

// Toggle Skill Levels
document.getElementById("toggle-skill-levels").addEventListener("click", () => {
  document.querySelectorAll("progress").forEach(p => {
    p.value = Math.floor(Math.random() * 100);
  });
});

// Theme Switcher
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  root.style.setProperty("--bg", "#ffffff");
  root.style.setProperty("--text", "#111111");
  root.style.setProperty("--accent", "#0077ff");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  if (root.style.getPropertyValue("--bg") === "#ffffff") {
    root.style.setProperty("--bg", "#0a0a0f");
    root.style.setProperty("--text", "#e0e0e0");
    root.style.setProperty("--accent", "#00e5ff");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  } else {
    root.style.setProperty("--bg", "#ffffff");
    root.style.setProperty("--text", "#111111");
    root.style.setProperty("--accent", "#0077ff");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  }
});

// Back to top button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
