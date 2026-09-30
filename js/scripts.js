/* North York Boxing Studio — contact wiring (reads js/config.js) */
(function () {
  var c = window.SITE_CONFIG || {};

  // WhatsApp buttons
  var waNumber = (c.whatsappNumber || "").replace(/\D/g, "");
  var waHref = waNumber
    ? "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(c.whatsappMessage || "")
    : "";
  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    if (waHref) {
      el.href = waHref;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      // Not configured yet: keep the button visible in preview, but inert
      el.href = "#";
      el.setAttribute("title", "Set whatsappNumber in js/config.js");
      el.addEventListener("click", function (e) { e.preventDefault(); });
    }
  });

  // Instagram links
  document.querySelectorAll("[data-instagram]").forEach(function (el) {
    if (c.instagramUrl) {
      el.href = c.instagramUrl;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.classList.add("d-none");
    }
  });

  // Phone
  document.querySelectorAll("[data-phone]").forEach(function (el) {
    if (c.phoneDisplay && c.phoneLink) {
      el.href = "tel:" + c.phoneLink;
      el.textContent = c.phoneDisplay;
    } else {
      el.classList.add("d-none");
    }
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
