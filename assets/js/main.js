/* =========================================
   Mobile Navigation Toggle
   Zerem – Production Safe
   ========================================= */

(function () {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    const expanded = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!expanded));
    nav.style.display = expanded ? "none" : "flex";
  });

  /* Close menu when clicking a link (mobile UX) */
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      nav.style.display = "none";
    });
  });

  /* Reset nav on resize (prevents stuck states) */
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
      nav.style.display = "flex";
      btn.setAttribute("aria-expanded", "false");
    } else {
      nav.style.display = "none";
    }
  });
})();

/* ---------------------------------
   Auto Active Nav Highlight
---------------------------------- */
(function () {
  const links = document.querySelectorAll(".nav a");
  const path = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
})();

/* ---------------------------------
   Sticky Header Shadow on Scroll
---------------------------------- */
(function () {
  const header = document.querySelector("header");
  if (!header) return;

  const toggleShadow = () => {
    if (window.scrollY > 10) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", toggleShadow, { passive: true });
  toggleShadow();
})();
