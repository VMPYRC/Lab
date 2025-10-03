// ==UserScript==
// @name         Kobo URL Cleaner
// @namespace    Kobo URL Cleaner
// @version      2025.10.03
// @description  Cleans unwanted URL parameters from Kobo.com
// @author       VMPYRC
// @match        *://*.kobo.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Parameters to remove
  const paramsToRemove = ["ssId", "sId", "cPos"];

  function cleanUrl(url) {
    try {
      let u = new URL(url);
      let changed = false;

      paramsToRemove.forEach((p) => {
        if (u.searchParams.has(p)) {
          u.searchParams.delete(p);
          changed = true;
        }
      });

      return changed ? u.toString() : null;
    } catch {
      return null;
    }
  }

  // Clean current page URL
  let newUrl = cleanUrl(window.location.href);
  if (newUrl) {
    window.history.replaceState({}, document.title, newUrl);
  }

  // Clean all links on the page
  function cleanLinks() {
    document.querySelectorAll("a[href]").forEach((link) => {
      let newUrl = cleanUrl(link.href);
      if (newUrl) link.href = newUrl;
    });
  }

  cleanLinks();

  // Keep watching for dynamically added Kobo links
  const observer = new MutationObserver(cleanLinks);
  observer.observe(document.body, { childList: true, subtree: true });
})();
