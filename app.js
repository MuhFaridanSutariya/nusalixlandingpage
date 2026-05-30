// Nusalix landing — tiny vanilla JS: language toggle + mobile menu.
// No framework, no build step. Keeps the page light for low-spec devices.

(function () {
  "use strict";

  var STORAGE_KEY = "nusalix-lang";
  var docEl = document.documentElement;

  // Apply a language ("id" or "en") across every translatable element.
  function applyLang(lang) {
    var nodes = document.querySelectorAll("[data-id]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var text = el.getAttribute("data-" + lang);
      if (text === null) continue;

      if (el.tagName === "TITLE") {
        document.title = text;
      } else if (el.tagName === "META") {
        el.setAttribute("content", text);
      } else {
        el.textContent = text;
      }
    }

    docEl.setAttribute("lang", lang);

    // The toggle button shows the OTHER language as its label.
    var label = document.getElementById("langLabel");
    if (label) label.textContent = lang === "id" ? "EN" : "ID";

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* storage may be unavailable (private mode) — ignore */
    }
  }

  function currentLang() {
    var saved;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      saved = null;
    }
    return saved === "en" ? "en" : "id"; // default Bahasa Indonesia
  }

  // Init language as early as possible.
  var lang = currentLang();
  applyLang(lang);

  document.addEventListener("DOMContentLoaded", function () {
    // Language toggle
    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        lang = lang === "id" ? "en" : "id";
        applyLang(lang);
      });
    }

    // Mobile menu
    var menuBtn = document.getElementById("menuBtn");
    var mobileNav = document.getElementById("mobileNav");
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", function () {
        var open = mobileNav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      // Close the menu after tapping a link.
      var links = mobileNav.querySelectorAll("a");
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
          mobileNav.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      }
    }
  });
})();
