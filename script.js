(() => {
  "use strict";

  /* =========================================================
     i18n strings — Turkish & English.
     ========================================================= */
  const dict = {
    tr: {
      "menu.file": "Dosya", "menu.edit": "Düzenle", "menu.view": "Görünüm",

      "about.title": "Hakkımda",
      "about.h1": "Hakkımda",
      "about.k.name": "İsim", "about.k.role": "Rol", "about.k.loc": "Konum", "about.k.mail": "E-posta",
      "about.v.role": "Frontend & AI",
      "about.v.mail": "İletişime geç",
      "about.p1": "Tasarım odaklı çalışmayı seven bir frontend geliştiriciyim. Son dönemde yapay zekâ ve LLM'lerle arayüzlerin nasıl daha sezgisel olabileceği üzerine deneyler yapıyorum.",
      "about.p2": "Detaylara takılırım; tamamlandığında kimsenin fark etmediği şeyleri severim. Tek başıma ya da küçük ekiplerde rahat çalışırım.",
      "about.btn.mail": "E-posta gönder",
      "about.btn.cv": "CV iste",

      "notes.exp.t": "Deneyim", "notes.exp.p": "Frontend & AI üzerine bağımsız çalışmalar…",
      "notes.exp.stamp": "22 Ocak 2026, 11:35",
      "notes.exp.h": "Deneyim",
      "notes.exp.b1": "Şu sıra bağımsız olarak frontend ve yapay zekâ kesişiminde çalışıyorum. Küçük arayüz denemeleri, LLM destekli araçlar, kişisel projeler.",
      "notes.exp.b2": "Tasarım tarafında Figma'da prototip kuruyor, kod tarafında modern web stack'i (React / Next.js / TypeScript) kullanıyorum.",
      "notes.exp.b3": "— Daha detaylı liste yakında.",

      "notes.edu.t": "Eğitim", "notes.edu.p": "Bilgisayar Mühendisliği lisans…",
      "notes.edu.stamp": "22 Ocak 2026, 11:36",
      "notes.edu.h": "Eğitim",
      "notes.edu.b1": "Bilgisayar Mühendisliği — lisans öğrenimim sürüyor.",
      "notes.edu.b2": "Frontend, etkileşim tasarımı ve son dönemde NLP / LLM odaklı self-learning.",

      "notes.bio.t": "Hakkımda", "notes.bio.p": "Tasarım odaklı bir frontend…",
      "notes.bio.stamp": "22 Ocak 2026, 11:40",
      "notes.bio.h": "Hakkımda",
      "notes.bio.b1": "İzmir'de yaşıyorum. Tasarım odaklı çalışmayı seven bir frontend geliştiriciyim. Son dönemde AI tarafında deneyler yapıyorum.",
      "notes.bio.b2": "Detaylara takılırım, tamamlandığında kimsenin fark etmediği şeyleri severim.",

      "proj.k.client": "Müşteri", "proj.k.year": "Yıl", "proj.k.type": "Tür", "proj.k.role": "Rol",
      "proj.placeholder": "görsel yakında",

      "proj.1.t": "Düşük Çözünürlük",
      "proj.1.d": "Bu alanda projenin kısa açıklaması yer alacak. Sıla bilgileri verince doldurulacak.",
      "proj.1.client": "—", "proj.1.year": "2026", "proj.1.type": "Frontend", "proj.1.role": "Tasarım & geliştirme",

      "proj.2.t": "Notlar Arşivi",
      "proj.2.d": "Bu alanda projenin kısa açıklaması yer alacak.",
      "proj.2.client": "—", "proj.2.year": "2026", "proj.2.type": "AI / araç", "proj.2.role": "Solo",

      "proj.3.t": "Sessiz Su",
      "proj.3.d": "Bu alanda projenin kısa açıklaması yer alacak.",
      "proj.3.client": "—", "proj.3.year": "2025", "proj.3.type": "Konsept", "proj.3.role": "Tasarım",

      "proj.4.t": "Kıyı Çizgisi",
      "proj.4.d": "Bu alanda projenin kısa açıklaması yer alacak.",
      "proj.4.client": "—", "proj.4.year": "2025", "proj.4.type": "UI deneyi", "proj.4.role": "Solo",

      "proj.5.t": "Şehir Eskizi",
      "proj.5.d": "Bu alanda projenin kısa açıklaması yer alacak.",
      "proj.5.client": "—", "proj.5.year": "2024", "proj.5.type": "Kişisel", "proj.5.role": "Solo"
    },
    en: {
      "menu.file": "File", "menu.edit": "Edit", "menu.view": "View",

      "about.title": "About",
      "about.h1": "About me",
      "about.k.name": "Name", "about.k.role": "Role", "about.k.loc": "Location", "about.k.mail": "Mail",
      "about.v.role": "Frontend & AI",
      "about.v.mail": "Get in touch",
      "about.p1": "I'm a design-leaning frontend developer. Lately I've been experimenting with AI and LLMs to make interfaces feel more intuitive.",
      "about.p2": "I get caught up in details — the kind that go unnoticed once they're right. I'm comfortable working solo or in small teams.",
      "about.btn.mail": "Send email",
      "about.btn.cv": "Request CV",

      "notes.exp.t": "Experience", "notes.exp.p": "Independent work — frontend & AI…",
      "notes.exp.stamp": "January 22, 2026 · 11:35",
      "notes.exp.h": "Experience",
      "notes.exp.b1": "Currently working independently at the intersection of frontend and AI. Small interface experiments, LLM-powered tools, personal projects.",
      "notes.exp.b2": "On the design side I prototype in Figma; on the code side I use a modern web stack (React / Next.js / TypeScript).",
      "notes.exp.b3": "— A more detailed list is on the way.",

      "notes.edu.t": "Education", "notes.edu.p": "Computer Engineering, undergrad…",
      "notes.edu.stamp": "January 22, 2026 · 11:36",
      "notes.edu.h": "Education",
      "notes.edu.b1": "Computer Engineering — undergraduate degree in progress.",
      "notes.edu.b2": "Frontend, interaction design, and recently NLP / LLM-focused self-learning.",

      "notes.bio.t": "About", "notes.bio.p": "A design-leaning frontend…",
      "notes.bio.stamp": "January 22, 2026 · 11:40",
      "notes.bio.h": "About",
      "notes.bio.b1": "I'm based in İzmir. A design-leaning frontend developer, currently experimenting on the AI side as well.",
      "notes.bio.b2": "I get caught up in details, and I love the things you only notice once they're gone.",

      "proj.k.client": "Client", "proj.k.year": "Year", "proj.k.type": "Type", "proj.k.role": "Role",
      "proj.placeholder": "image coming soon",

      "proj.1.t": "Low Resolution",
      "proj.1.d": "Short project description goes here. To be filled in.",
      "proj.1.client": "—", "proj.1.year": "2026", "proj.1.type": "Frontend", "proj.1.role": "Design & dev",

      "proj.2.t": "Notes Archive",
      "proj.2.d": "Short project description goes here.",
      "proj.2.client": "—", "proj.2.year": "2026", "proj.2.type": "AI / tool", "proj.2.role": "Solo",

      "proj.3.t": "Silent Water",
      "proj.3.d": "Short project description goes here.",
      "proj.3.client": "—", "proj.3.year": "2025", "proj.3.type": "Concept", "proj.3.role": "Design",

      "proj.4.t": "Coastline",
      "proj.4.d": "Short project description goes here.",
      "proj.4.client": "—", "proj.4.year": "2025", "proj.4.type": "UI experiment", "proj.4.role": "Solo",

      "proj.5.t": "City Sketch",
      "proj.5.d": "Short project description goes here.",
      "proj.5.client": "—", "proj.5.year": "2024", "proj.5.type": "Personal", "proj.5.role": "Solo"
    }
  };

  const tipMap = {
    "about": { tr: "Hakkımda", en: "About" },
    "notes": { tr: "Notlar",   en: "Notes" }
  };

  /* =========================================================
     Language
     ========================================================= */
  const html = document.documentElement;
  const STORE_LANG = "sb.lang";

  function detectLang() {
    try {
      const s = localStorage.getItem(STORE_LANG);
      if (s === "tr" || s === "en") return s;
    } catch {}
    return (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en";
  }

  function applyLang(lang) {
    const d = dict[lang] || dict.tr;
    html.setAttribute("lang", lang);
    html.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (d[k] != null) el.textContent = d[k];
    });
    // Dock tooltips
    document.querySelectorAll(".dock__app[data-window]").forEach((el) => {
      const id = el.getAttribute("data-window");
      const map = tipMap[id];
      if (map) el.setAttribute("data-tip", map[lang]);
    });
    // Lang button label
    const btn = document.querySelector(".menubar__lang");
    if (btn) btn.textContent = lang === "tr" ? "EN" : "TR"; // shows the *other* option
    try { localStorage.setItem(STORE_LANG, lang); } catch {}
  }

  applyLang(detectLang());
  document.querySelector(".menubar__lang")?.addEventListener("click", () => {
    const next = html.getAttribute("data-lang") === "tr" ? "en" : "tr";
    applyLang(next);
  });

  /* =========================================================
     Clock in menu bar
     ========================================================= */
  const time = document.getElementById("menubar-time");
  function tick() {
    if (!time) return;
    const now = new Date();
    const lang = html.getAttribute("data-lang") === "en" ? "en-US" : "tr-TR";
    const day = now.toLocaleDateString(lang, { weekday: "short", day: "numeric", month: "short" });
    const t = now.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" });
    time.textContent = `${day}  ${t}`;
  }
  tick(); setInterval(tick, 30 * 1000);

  /* =========================================================
     Window manager
     ========================================================= */
  const desktop = document.getElementById("desktop");
  const winsRoot = document.getElementById("windows");
  let zTop = 50;
  const openSet = new Set();

  function bringFront(win) {
    zTop += 1;
    win.style.zIndex = String(zTop);
  }

  function placeWindow(win, anchor) {
    // Center-ish placement, with cascading offset based on how many are open.
    const offset = openSet.size * 26;
    const w = parseInt(win.getAttribute("data-w") || "560", 10);
    const dx = parseInt(win.getAttribute("data-x") || "120", 10);
    const dy = parseInt(win.getAttribute("data-y") || "100", 10);
    const maxLeft = Math.max(20, window.innerWidth - w - 20);
    const left = Math.min(maxLeft, dx + offset);
    const top = Math.max(28, dy + offset);
    win.style.left = `${left}px`;
    win.style.top = `${top}px`;

    if (anchor) {
      const r = anchor.getBoundingClientRect();
      win.style.setProperty("--origin-x", `${r.left + r.width / 2 - left}px`);
      win.style.setProperty("--origin-y", `${r.top + r.height / 2 - top}px`);
    } else {
      win.style.removeProperty("--origin-x");
      win.style.removeProperty("--origin-y");
    }
  }

  function openWindow(id, anchor) {
    const win = document.getElementById(id);
    if (!win) return;
    if (!win.hidden) { bringFront(win); return; }
    win.hidden = false;
    placeWindow(win, anchor);
    bringFront(win);
    openSet.add(id);
    markDockOpen(id, true);
    // re-trigger animation
    win.classList.remove("is-closing", "is-min");
    win.style.animation = "none";
    void win.offsetWidth;
    win.style.animation = "";
  }

  function closeWindow(win) {
    const id = win.id;
    win.classList.add("is-closing");
    setTimeout(() => {
      win.hidden = true;
      win.classList.remove("is-closing");
      openSet.delete(id);
      markDockOpen(id, false);
    }, 220);
  }

  function minimizeWindow(win) {
    // Animate toward the dock, then hide.
    const dock = document.querySelector(".dock");
    const target = document.querySelector(`.dock__app[data-window="${win.id}"]`) || dock;
    const r = win.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    win.style.setProperty("--min-tx", `${(t.left + t.width / 2) - (r.left + r.width / 2)}px`);
    win.style.setProperty("--min-ty", `${(t.top + t.height / 2) - (r.top + r.height / 2)}px`);
    win.classList.add("is-min");
    setTimeout(() => {
      win.hidden = true;
      win.classList.remove("is-min");
      openSet.delete(win.id);
      markDockOpen(win.id, false);
    }, 250);
  }

  function maximizeWindow(win) {
    if (win.dataset.maxed === "1") {
      win.style.left = win.dataset.prevLeft || "";
      win.style.top = win.dataset.prevTop || "";
      win.style.width = win.dataset.prevWidth || "";
      win.style.height = win.dataset.prevHeight || "";
      win.dataset.maxed = "";
    } else {
      win.dataset.prevLeft = win.style.left;
      win.dataset.prevTop = win.style.top;
      win.dataset.prevWidth = win.style.width;
      win.dataset.prevHeight = win.style.height;
      const pad = 24;
      win.style.left = `${pad}px`;
      win.style.top = `${28 + pad}px`;
      win.style.width = `${window.innerWidth - pad * 2}px`;
      win.style.height = `${window.innerHeight - 28 - 78 - pad * 2}px`;
      win.dataset.maxed = "1";
    }
  }

  function markDockOpen(id, on) {
    const a = document.querySelector(`.dock__app[data-window="${id}"]`);
    if (a) a.classList.toggle("is-open", on);
  }

  // ---- delegate clicks
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-window]");
    if (trigger && trigger.tagName !== "A") {
      e.preventDefault();
      const id = trigger.getAttribute("data-window");
      // file selection visual
      if (trigger.classList.contains("file")) {
        document.querySelectorAll(".file.is-selected").forEach((f) => f.classList.remove("is-selected"));
        trigger.classList.add("is-selected");
      }
      openWindow(id, trigger);
      return;
    }

    const action = e.target.closest("[data-action]");
    if (action) {
      const win = action.closest(".win");
      if (!win) return;
      const a = action.getAttribute("data-action");
      if (a === "close") closeWindow(win);
      else if (a === "minimize") minimizeWindow(win);
      else if (a === "maximize") maximizeWindow(win);
    }

    // bring window to front on any click within it
    const win = e.target.closest(".win");
    if (win) bringFront(win);

    // click on empty desktop deselects files
    if (e.target.classList.contains("desktop") || e.target.id === "desktop") {
      document.querySelectorAll(".file.is-selected").forEach((f) => f.classList.remove("is-selected"));
    }
  });

  // ---- dragging by titlebar
  function makeDraggable(win) {
    const bar = win.querySelector(".win__bar");
    if (!bar) return;
    let startX = 0, startY = 0, baseLeft = 0, baseTop = 0, dragging = false;
    bar.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".dot")) return; // don't drag from traffic lights
      dragging = true;
      bar.setPointerCapture(e.pointerId);
      const rect = win.getBoundingClientRect();
      startX = e.clientX; startY = e.clientY;
      baseLeft = rect.left; baseTop = rect.top;
      bringFront(win);
    });
    bar.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const left = Math.min(window.innerWidth - 80, Math.max(-100, baseLeft + dx));
      const top = Math.min(window.innerHeight - 60, Math.max(28, baseTop + dy));
      win.style.left = `${left}px`;
      win.style.top = `${top}px`;
    });
    bar.addEventListener("pointerup", (e) => {
      dragging = false;
      try { bar.releasePointerCapture(e.pointerId); } catch {}
    });
  }
  document.querySelectorAll(".win").forEach(makeDraggable);

  /* =========================================================
     Notes window — switch between entries
     ========================================================= */
  document.querySelectorAll(".notes__entry").forEach((entry) => {
    entry.addEventListener("click", () => {
      const root = entry.closest(".win");
      if (!root) return;
      const id = entry.getAttribute("data-note");
      root.querySelectorAll(".notes__entry").forEach((b) => {
        const on = b === entry;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      root.querySelectorAll(".notes__content").forEach((p) => {
        p.hidden = p.getAttribute("data-note-pane") !== id;
      });
    });
  });

  /* =========================================================
     Email obfuscation — assemble on intent.
     ========================================================= */
  function buildAddr(el) {
    const u = el.getAttribute("data-user") || "";
    const d = el.getAttribute("data-domain") || "";
    return `${u}@${d}`;
  }

  document.addEventListener("click", async (e) => {
    const mail = e.target.closest("[data-mail]");
    const cv = e.target.closest("[data-cv]");
    if (!mail && !cv) return;

    const lang = html.getAttribute("data-lang") || "tr";
    const target = mail || cv;
    const addr = buildAddr(target);

    let subject, body;
    if (cv) {
      subject = lang === "tr" ? "CV talebi" : "CV request";
      body = lang === "tr"
        ? "Merhaba Sıla, güncel CV'ni paylaşabilir misin?"
        : "Hi Sıla, could you share your latest CV?";
    } else {
      subject = lang === "tr" ? "Merhaba!" : "Hi there";
      body = "";
    }

    try { await navigator.clipboard.writeText(addr); } catch {}
    const url = `mailto:${addr}?subject=${encodeURIComponent(subject)}` + (body ? `&body=${encodeURIComponent(body)}` : "");
    window.location.href = url;
  });

  /* =========================================================
     Light protections — best-effort, not bulletproof.
     OS-level screenshots (Cmd+Shift+3/4, PrtScn, mobile) can't be blocked.
     ========================================================= */
  document.addEventListener("contextmenu", (e) => {
    if (e.target.closest("img, .avatar, .dock__icon, .file__thumb")) e.preventDefault();
  });
  document.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG" || e.target.closest(".avatar, .dock__icon, .file__thumb")) e.preventDefault();
  });
  document.addEventListener("keydown", (e) => {
    const k = e.key;
    const meta = e.metaKey || e.ctrlKey;
    // print
    if (meta && (k === "p" || k === "P")) { e.preventDefault(); return; }
    // save page
    if (meta && (k === "s" || k === "S")) { e.preventDefault(); return; }
    // firefox screenshot shortcut
    if (meta && e.shiftKey && (k === "s" || k === "S")) { e.preventDefault(); return; }
    // try to disrupt printscreen on browsers that surface it
    if (k === "PrintScreen") {
      try { navigator.clipboard.writeText(""); } catch {}
      e.preventDefault();
    }
  });
  // Belt-and-braces print interception (some browsers don't fire keydown for system print).
  window.addEventListener("beforeprint", (e) => { e.preventDefault?.(); });

  /* =========================================================
     Auto-open About on first visit (small invitation)
     ========================================================= */
  const SEEN = "sb.seen";
  try {
    if (!localStorage.getItem(SEEN)) {
      // small delay so the desktop reads first
      setTimeout(() => openWindow("about"), 450);
      localStorage.setItem(SEEN, "1");
    }
  } catch {
    setTimeout(() => openWindow("about"), 450);
  }

})();
