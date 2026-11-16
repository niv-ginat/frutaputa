/* Fruta Puta — Google Analytics, loaded only after the visitor says yes (EU cookie rules) */
(function () {
  const GA_ID = "G-QQQL0DKLNP";
  const KEY = "fp-consent"; // "yes" | "no"
  let choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  let loaded = false;

  function load() {
    if (loaded) return;
    loaded = true;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }
  // send an event (only if the visitor agreed)
  window.fpTrack = function (name, params) { if (loaded) gtag("event", name, params || {}); };

  function banner() {
    const b = document.createElement("div");
    b.className = "consent micro";
    b.setAttribute("role", "dialog");
    b.setAttribute("aria-label", "Cookies");
    b.innerHTML =
      '<span>This site uses cookies to count visits. Nothing else.</span>' +
      '<span class="consent-actions"><button data-c="yes">Okay</button><button data-c="no">No thanks</button></span>';
    b.addEventListener("click", (e) => {
      const c = e.target.getAttribute("data-c");
      if (!c) return;
      try { localStorage.setItem(KEY, c); } catch (err) {}
      if (c === "yes") load();
      b.remove();
    });
    document.body.appendChild(b);
  }

  if (choice === "yes") load();
  else if (choice !== "no") document.addEventListener("DOMContentLoaded", banner);

  // the clicks that matter for commissions
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (href.startsWith("mailto:")) fpTrack("click_email", { link_url: href });
    else if (href.includes("instagram.com")) fpTrack("click_instagram", { link_url: href });
    else if (href.includes("work-together")) fpTrack("click_work_together");
  });
})();
