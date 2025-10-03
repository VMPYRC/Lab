// ==UserScript==
// @name         Kobo URL Cleaner
// @namespace    Kobo URL Cleaner
// @version      2025.10.03
// @description  Cleans unwanted URL parameters from Kobo ebook/product links
// @author       VMPYRC
// @match        https://www.kobo.com/us/en/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const paramsToRemove = ["sId", "ssId", "cPos"];

  // --- Clean current page URL ---
  if (!window.location.pathname.startsWith("/us/en/search")) {
    const url = new URL(window.location.href);
    let changed = false;
    paramsToRemove.forEach((param) => {
      if (url.searchParams.has(param)) {
        url.searchParams.delete(param);
        changed = true;
      }
    });
    if (changed) {
      window.history.replaceState({}, document.title, url.toString());
    }
  }

  // --- Clean all Kobo ebook/product links on the page ---
  function cleanLinks() {
    document.querySelectorAll('a[href*="/us/en/ebook/"]').forEach((link) => {
      const linkURL = new URL(link.href, window.location.origin);
      let changed = false;
      paramsToRemove.forEach((param) => {
        if (linkURL.searchParams.has(param)) {
          linkURL.searchParams.delete(param);
          changed = true;
        }
      });
      if (changed) {
        link.href = linkURL.toString();
      }
    });
  }

  // Initial cleaning
  cleanLinks();

  // Optional: observe dynamically added links (e.g., infinite scroll)
  const observer = new MutationObserver(cleanLinks);
  observer.observe(document.body, { childList: true, subtree: true });
})();
