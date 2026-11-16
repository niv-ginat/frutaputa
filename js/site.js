/* Fruta Puta — site behaviour */
(function () {
  const P = (window.PROJECTS || []).slice();
  const C = window.FP_CONTACT || {};
  const root = document.documentElement;
  const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const media = (src, alt, cls) =>
    isVideo(src)
      ? `<video src="${esc(src)}" autoplay muted loop playsinline ${cls ? `class="${cls}"` : ""}></video>`
      : `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" ${cls ? `class="${cls}"` : ""}/>`;
  const byDateDesc = (a, b) => b.year - a.year || (b.month || 0) - (a.month || 0);
  P.sort(byDateDesc);

  // colour-on-colour pairs [background, type], one per project unless a project sets `theme`
  const THEMES = [
    ["#2c6a67", "#ecb19f"], // teal / peach
    ["#e7bd44", "#2e2525"], // mustard / ink
    ["#ecb19f", "#2c6a67"], // peach / teal
    ["#2e2525", "#fe7359"], // ink / coral
    ["#beb939", "#2e2525"], // chartreuse / ink
    ["#ce8c90", "#2e2525"], // rose / ink
    ["#d67e37", "#2e2525"], // papaya / ink
  ];
  const setTheme = (bg, fg) => { root.style.setProperty("--bg", bg); root.style.setProperty("--fg", fg); };

  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.href = "mailto:" + C.email;
    if (!el.textContent.trim()) el.textContent = C.email;
  });

  const splashWrap = document.querySelector(".splash-wrap");
  const nav = document.querySelector(".nav");
  function navTone() {
    if (!nav) return;
    const over = Array.from(document.querySelectorAll("[data-dark]")).some((z) => {
      const r = z.getBoundingClientRect();
      return r.top <= 30 && r.bottom >= 30;
    });
    nav.classList.toggle("on-dark", over);
    // the four-corner labels only show on the opening screen
    nav.classList.toggle("hide-corners", !(splashWrap && splashWrap.getBoundingClientRect().bottom > window.innerHeight * 1.05));
  }

  /* ---------- homepage ---------- */
  if (splashWrap) {
    const splash = splashWrap.querySelector(".splash");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function onScroll() {
      const total = splashWrap.offsetHeight - window.innerHeight;
      const t = Math.min(1, Math.max(0, window.scrollY / total));
      const vmin = Math.min(window.innerWidth, window.innerHeight);
      const full = Math.hypot(window.innerWidth, window.innerHeight) / 2;
      const small = vmin * 0.26;
      const ease = reduce ? (t > 0.5 ? 1 : 0) : 1 - Math.pow(1 - t, 2);
      splash.style.setProperty("--r", full + (small - full) * ease + "px");
      splash.style.setProperty("--s", (1 - 0.6 * ease).toFixed(3));
      splash.style.setProperty("--hint", (1 - t * 3).toFixed(3));
      splashWrap.toggleAttribute("data-dark", ease < 0.6);
      navTone();
    }
    document.querySelector(".enter").addEventListener("click", () =>
      document.getElementById("work").scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
    );
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    // index: one line per project, image follows the cursor
    const list = document.getElementById("index");
    const hover = document.querySelector(".hover-media");
    const render = (order) => {
      const items = P.slice().sort(order === "asc" ? (a, b) => -byDateDesc(a, b) : byDateDesc);
      list.innerHTML = items
        .map(
          (p, i) => `<li><a href="project.html#${encodeURIComponent(p.slug)}" data-i="${P.indexOf(p)}">
            ${isVideo(p.cover) ? "" : `<img class="mobile-thumb" src="${esc(p.cover)}" alt="" loading="lazy"/>`}
            <span class="yr">${p.year}</span>
            <span class="t">${esc(p.title)}</span>
            <span class="micro place">${esc(p.place || "")}</span>
            <span class="micro type">${esc(p.type || "")}</span></a></li>`
        )
        .join("");
      list.querySelectorAll("a").forEach((a) => {
        const p = P[+a.dataset.i];
        a.addEventListener("mouseenter", () => { hover.innerHTML = media(p.cover, p.title); hover.classList.add("on"); });
        a.addEventListener("mouseleave", () => hover.classList.remove("on"));
      });
    };
    window.addEventListener("mousemove", (e) => { hover.style.left = e.clientX + "px"; hover.style.top = e.clientY + "px"; });
    document.querySelectorAll(".order button").forEach((b) =>
      b.addEventListener("click", () => {
        document.querySelectorAll(".order button").forEach((x) => x.setAttribute("aria-pressed", x === b));
        render(b.dataset.order);
      })
    );
    render("desc");
  }

  /* ---------- project page ---------- */
  const proj = document.getElementById("project");
  if (proj) {
    const draw = () => {
      const slug = new URLSearchParams(location.search).get("p") || decodeURIComponent(location.hash.slice(1));
      const i = P.findIndex((p) => p.slug === slug);
      window.scrollTo(0, 0);
      if (i < 0) {
        setTheme("#2e2525", "#fe7359");
        proj.innerHTML = `<div class="p-head"><h1 class="giant">Lost</h1></div><p class="micro"><a href="index.html#work">( Back to all work )</a></p>`;
        return;
      }
      const p = P[i];
      const th = p.theme || THEMES[i % THEMES.length];
      setTheme(th[0], th[1]);
      document.title = `${p.title} — Fruta Puta`;
      if (window.fpTrack) fpTrack("view_project", { project: p.slug, page_title: document.title });
      const newer = P[i - 1], older = P[i + 1];
      const meta = [["Year", p.year], ["Place", p.place], ["Type", p.type], ["Client", p.client]]
        .filter((m) => m[1])
        .map((m) => `<div class="micro">${m[0]}<div class="v">${esc(m[1])}</div></div>`)
        .join("");
      const n = (p.media || [p.cover]).length;
      proj.innerHTML = `
        <div class="p-head">
          <p class="micro"><a href="index.html#work">( All work )</a> &nbsp; ${String(P.length - i).padStart(2, "0")} / ${String(P.length).padStart(2, "0")}</p>
          <h1 class="giant">${esc(p.title)}</h1>
          <div class="p-meta">${meta}</div>
        </div>
        ${(p.description || []).length ? `<div class="p-desc just">${p.description.map((d) => `<p>${esc(d)}</p>`).join("")}</div>` : ""}
        <div class="gallery">${(p.media || [p.cover])
          .map((m, k) => `<figure>${media(m, p.title)}<figcaption class="micro"><span>${esc(p.title)}</span><span>${k + 1} / ${n}</span></figcaption></figure>`)
          .join("")}</div>
        <nav class="pager micro">
          ${older ? `<a href="project.html#${older.slug}">Earlier · ${older.year}<span class="t">${esc(older.title)}</span></a>` : ""}
          ${newer ? `<a class="next" href="project.html#${newer.slug}">Later · ${newer.year}<span class="t">${esc(newer.title)}</span></a>` : ""}
        </nav>`;
      proj.querySelectorAll(".gallery img, .gallery video").forEach((el) => {
        const tag = () => {
          const w = el.naturalWidth || el.videoWidth, h = el.naturalHeight || el.videoHeight;
          if (!w || !h) return;
          el.parentElement.classList.toggle("tall", h > w * 1.15);
          el.parentElement.classList.toggle("wide", w > h * 1.3);
        };
        el.addEventListener("load", tag);
        el.addEventListener("loadedmetadata", tag);
      });
    };
    window.addEventListener("hashchange", draw);
    draw();
  }

  /* ---------- work together form (opens an email, no server needed) ---------- */
  const form = document.querySelector("form.enquiry");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(form);
      if (window.fpTrack) fpTrack("generate_lead", { project_type: f.get("type"), budget: f.get("budget") });
      const subject = `Project enquiry: ${f.get("type") || "New project"} — ${f.get("name") || ""}`;
      const body = ["Name: " + f.get("name"), "Email: " + f.get("email"), "Project: " + f.get("type"), "Location: " + f.get("location"),
        "Timing: " + f.get("timing"), "Budget: " + f.get("budget"), "", f.get("message")].join("\n");
      location.href = `mailto:${C.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  window.addEventListener("scroll", navTone, { passive: true });
  navTone();
})();
