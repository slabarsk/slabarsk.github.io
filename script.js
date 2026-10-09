(() => {
  "use strict";

  const translations = { tr: {
  "experience.role": "Geliştirici",
  "experience.fullTime": "Tam zamanlı",
  "experience.location": "İzmir, Türkiye",
  "experience.aicado.date": "AĞUSTOS 2024 — GÜNÜMÜZ",
  "experience.aicado.sales": "Satış Büyümesi",
  "experience.aicado.strategy": "Büyüme Stratejileri",
  "experience.tag": "Web geliştirme",
  "certificates.document": "Sertifika",
  "certificates.google": "Google Dijital Atölye",
  "nav.experience": "Deneyim",
  "nav.education": "Eğitim",
  "nav.skills": "Yetkinlikler",
  "nav.certificates": "Sertifikalar",
  "nav.projects": "Projeler",
  "nav.volunteering": "Gönüllülük",
  "skip": "İçeriğe geç",
  "nav.contact": "Konuşalım",
  "hero.role": "YAZILIM MÜHENDİSİ",
  "hero.hello": "Merhaba, ben",
  "hero.subtitle": "Özenle tasarlanan arayüzler.\nAnlamlı dijital deneyimler.",
  "hero.description": "Sezgisel web uygulamaları ve yapay zekâ destekli ürünler geliştirmek için tasarımı teknolojiyle buluşturuyorum.",
  "hero.work": "Çalışmalarımı keşfet",
  "hero.about": "Beni tanıyın",
  "hero.caption": "Geliştirici bakışı. Tasarımcı özeni.",
  "focus.label": "ODAK ALANLARIM",
  "focus.frontend": "Frontend geliştirme",
  "focus.design": "Kullanıcı odaklı tasarım",
  "focus.ai": "Yapay zekâ ve no-code",
  "about.caption": "FİKİRDEN DENEYİME",
  "about.label": "HAKKIMDA",
  "about.title1": "Merakla başlar.",
  "about.title2": "Özenle geliştiririm.",
  "about.p1": "Frontend geliştirme ve kullanıcı odaklı tasarımla ilgilenen bir yazılım mühendisiyim. Bitirme projem için geliştirdiğim mobil uygulama, mobil geliştirmeye ilgimi artırdı; çalışmalarım zamanla yapay zekâ destekli ürünlere uzandı.",
  "about.p2": "Tasarımları çalışan deneyimlere dönüştürmeyi, pratik çözümler üretmeyi ve bu süreçte öğrenmeyi seviyorum. Ekranın dışında ise gençlik topluluklarına katkı sunuyor, etkinlikler düzenliyor ve birlikte fayda üretmek için ekiplerle çalışıyorum.",
  "about.journey": "Deneyimimi inceleyin",
  "experience.label": "KARİYER",
  "experience.title": "İş deneyimi",
  "experience.intro": "Arayüzden arkasındaki entegrasyonlara kadar faydalı ürünler geliştiriyorum.",
  "experience.date": "HAZİRAN 2023 — AĞUSTOS 2026",
  "experience.b0": "Müşteri ihtiyaçlarına uygun web uygulamalarının geliştirilmesi ve özelleştirilmesi.",
  "experience.b1": "Daha iyi kullanıcı deneyimleri için arayüz tasarımının ve kullanılabilirliğin iyileştirilmesi.",
  "experience.b2": "Veritabanı yapılandırması, API bağlantıları ve dış servis entegrasyonları.",
  "experience.b3": "E-ticaret platformları ve iş yönetimi araçlarının geliştirilmesi.",
  "experience.b4": "Yapay zekâ yeteneklerinin web ürünlerine entegre edilmesi.",
  "education.label": "TEMEL",
  "education.title": "Eğitim",
  "education.degree0": "Yazılım Mühendisliği Lisans",
  "education.uni0": "Yaşar Üniversitesi",
  "education.yasarStatus": "Devam ediyor",
  "education.degree1": "Bilgisayar Programcılığı Ön Lisans",
  "education.uni1": "Atatürk Üniversitesi",
  "skills.label": "ARAÇLARIM",
  "skills.title": "Yetkinlikler ve teknolojiler",
  "skills.intro": "Fikirleri hayata geçirirken kullandığım araçlar.",
  "skills.group0": "Frontend ve mobil",
  "skills.group1": "Tasarım ve no-code",
  "skills.group2": "Araçlar ve çalışma biçimi",
  "certificates.label": "ÖĞRENMEYE DEVAM",
  "certificates.title": "Sertifikalar",
  "certificates.name0": "Hi-Kod: Oyun Geliştirme",
  "certificates.name1": "Dijital Pazarlamanın Temelleri",
  "certificates.name2": "Konuşan Eller: İşaret Dili",
  "certificates.name3": "Programlamanın Temelleri",
  "projects.label": "SEÇİLİ ÇALIŞMALAR",
  "projects.title": "Fikirden ürüne.",
  "projects.intro": "Yapay zekâ, no-code ve web alanlarında katkı sunduğum projelerden bir seçki.",
  "projects.category0": "YAPAY ZEKÂ PLATFORMU",
  "projects.description0": "Kod yazmadan görsel, metin, ses ve video üretmeye olanak tanıyan üretken yapay zekâ araçları.",
  "projects.preview0": "Aicado önizlemesini büyüt",
  "projects.category1": "NO-CODE TOPLULUĞU",
  "projects.description1": "Türkiye’nin no-code topluluğu için birlikte öğrenme, üretme ve paylaşma alanı.",
  "projects.preview1": "Kodsuz.org önizlemesini büyüt",
  "projects.category2": "ŞABLON PAZAR YERİ",
  "projects.description2": "Daha düzenli ve verimli iş akışları için Notion şablonları ve kaynakları.",
  "projects.preview2": "Notion Insider önizlemesini büyüt",
  "projects.category3": "DİJİTAL ÜRÜNLER",
  "projects.description3": "İşletmelerin ihtiyaçlarıyla büyümek üzere no-code ile geliştirilen dijital ürünler.",
  "projects.preview3": "Kodsuz önizlemesini büyüt",
  "projects.category4": "İYİ YAŞAM PLATFORMU",
  "projects.description4": "Bütünsel iyi yaşam için öğrenme içeriklerini, egzersizleri ve kaynakları buluşturan bir platform.",
  "projects.preview4": "Miboso Wellbeing önizlemesini büyüt",
  "projects.category5": "GÖRÜNTÜLÜ İLETİŞİM",
  "projects.description5": "Jitsi altyapısıyla çalışan, farklı ekranlara uyumlu ve özelleştirilebilir bir video konferans şablonu.",
  "projects.preview5": "MeetFully önizlemesini büyüt",
  "projects.category6": "İŞ YÖNETİMİ",
  "projects.description6": "Hırdavat işletmeleri için satış, stok, sipariş, cari hesap ve katalog süreçlerini masaüstü ve mobilde bir araya getiren iş yönetimi yazılımı.",
  "projects.preview6": "Hırdavatçı AI önizlemesini büyüt",
  "volunteering.label": "EKRANIN ÖTESİNDE",
  "volunteering.title": "Birlikte fayda üretmek.",
  "volunteering.intro": "Bildiklerimi paylaşmak, başkalarından öğrenmek ve topluluklara katkı sunmak.",
  "volunteering.since": "EKİM 2022’DEN BU YANA",
  "volunteering.pi": "Pi Gençlik Derneği",
  "volunteering.role": "Pixel ve Web Ekibi Üyesi",
  "volunteering.piDescription": "Pixel ekibiyle etkinlikler düzenliyor; derneğin ve diğer gençlik derneklerinin web sitelerini yönetmek için WebMaster ekibine katkı sunuyorum.",
  "volunteering.youthpass": "Youthpass belgesini gör",
  "volunteering.seminar": "EĞİTİM VE TOPLULUK",
  "volunteering.seminarDescription": "Yaygın eğitim yöntemlerini, çevresel değerleri, açık havada öğrenmeyi ve daha demokratik eğitim yaklaşımlarını ele alan bir seminer.",
  "volunteering.video": "Videoyu izle",
  "volunteering.quote": "Güzel şeyler,\nbir araya gelince başlar.",
  "contact.label": "İLETİŞİM",
  "contact.title1": "Aklınızda",
  "contact.title2": "bir fikir mi var?",
  "contact.intro": "Bir proje, bir fırsat veya sadece bir merhaba. Sizden haber almak isterim.",
  "contact.copy": "E-postayı kopyala",
  "contact.cv": "CV’mi iste",
  "form.name": "Adınız",
  "form.email": "E-posta adresiniz",
  "form.subject": "Konu nedir?",
  "form.message": "Mesajınız",
  "form.submit": "Birlikte konuşalım",
  "form.note": "E-posta uygulamanızda bir taslak açar. Kontrol edip oradan gönderebilirsiniz.",
  "footer.top": "Başa dön",
  "nav.label": "Ana menü",
  "menu.open": "Menüyü aç",
  "menu.close": "Menüyü kapat",
  "about.image": "Yazılım geliştirme çalışma ortamı",
  "volunteering.piImage": "Pi Gençlik topluluk buluşması",
  "volunteering.seminarImage": "IS YOUR SCHOOL G.O.D.? seminerinin katılımcıları",
  "volunteering.workshopImage": "Topluluk atölyesi",
  "volunteering.eveningImage": "Açık havada topluluk etkinliği",
  "form.namePlaceholder": "Ad Soyad",
  "form.subjectPlaceholder": "Bir proje, bir fikir, bir fırsat…",
  "form.messagePlaceholder": "Biraz daha anlatın…",
  "preview.close": "Önizlemeyi kapat",
  "contact.copied": "E-posta adresi kopyalandı.",
  "contact.copyFailed": "Kopyalama kullanılamıyor. Yukarıdaki e-posta adresini seçip kopyalayabilirsiniz.",
  "form.ready": "E-posta taslağınız açılıyor. Uygulama açılmazsa soldaki e-posta bağlantısını kullanabilirsiniz.",
  "meta.title": "Sıla Barışık — Yazılım Mühendisi",
  "meta.description": "Sıla Barışık — frontend geliştirme, kullanıcı odaklı tasarım ve yapay zekâ destekli ürünler üzerine çalışan yazılım mühendisi. İzmir, Türkiye."
}, en: {} };

  const root = document.documentElement;
  const languageButton = document.querySelector('.language-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  const preview = document.querySelector('.preview-dialog');
  const copyStatus = document.querySelector('.copy-status');
  const formStatus = document.querySelector('.form-status');
  const translatedNodes = document.querySelectorAll('[data-i18n]');
  const translatedAttributes = [
    ['data-i18n-aria', 'aria-label'],
    ['data-i18n-alt', 'alt'],
    ['data-i18n-placeholder', 'placeholder']
  ];
  let language = 'en';
  let activeProject = null;
  let lastPreviewTrigger = null;

  // Keep the English HTML readable and usable before JavaScript runs.
  translatedNodes.forEach(node => {
    translations.en[node.dataset.i18n] = node.textContent;
  });
  translatedAttributes.forEach(([key, attribute]) => {
    document.querySelectorAll(`[${key}]`).forEach(node => {
      translations.en[node.getAttribute(key)] = node.getAttribute(attribute);
    });
  });
  Object.assign(translations.en, {
    'menu.close': 'Close navigation',
    'contact.copied': 'Email address copied.',
    'contact.copyFailed': 'Copy is unavailable. You can select and copy the email address above.',
    'form.ready': 'Opening your email draft. If your email app does not open, use the email link on this page.',
    'meta.title': document.title,
    'meta.description': document.querySelector('meta[name="description"]').content
  });

  const translate = key => translations[language][key] ?? translations.en[key] ?? '';

  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', translate(open ? 'menu.close' : 'menu.open'));
    navigation.classList.toggle('is-open', open);
  }

  function updatePreview() {
    if (!activeProject) return;
    const card = activeProject.closest('.project-card');
    document.getElementById('preview-title').textContent = card.querySelector('h3').textContent;
    preview.querySelector('.preview-description').textContent = card.querySelector('p').textContent;
  }

  function applyLanguage(next) {
    language = next === 'tr' ? 'tr' : 'en';
    root.lang = language;
    root.dataset.lang = language;
    translatedNodes.forEach(node => { node.textContent = translate(node.dataset.i18n); });
    translatedAttributes.forEach(([key, attribute]) => {
      document.querySelectorAll(`[${key}]`).forEach(node => {
        node.setAttribute(attribute, translate(node.getAttribute(key)));
      });
    });
    languageButton.textContent = language === 'en' ? 'TR' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? 'Türkçeye geç' : 'Switch to English');
    document.title = translate('meta.title');
    document.querySelector('meta[name="description"]').content = translate('meta.description');
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = translate('meta.description');
    document.querySelector('.contact-links a').href = 'mailto:silabarisik@gmail.com?subject=' + encodeURIComponent(language === 'tr' ? 'CV talebi' : 'CV request');
    copyStatus.textContent = '';
    formStatus.textContent = '';
    setMenu(false);
    updatePreview();
    try { localStorage.setItem('sb.lang', language); } catch { /* Storage is optional. */ }
  }

  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('sb.lang') || 'en'; } catch { /* Use English. */ }
  applyLanguage(savedLanguage);
  languageButton.addEventListener('click', () => applyLanguage(language === 'en' ? 'tr' : 'en'));
  document.getElementById('year').textContent = new Date().getFullYear();

  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    const wasOpen = navigation.classList.contains('is-open');
    setMenu(false);
    // Move keyboard focus out of the menu that has just been hidden.
    if (wasOpen) {
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        section.tabIndex = -1;
        section.focus({ preventScroll: true });
        section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
      }
    }
  });
  document.querySelector('.header-contact').addEventListener('click', () => setMenu(false));
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      setMenu(false);
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });

  // Native dialog supplies focus containment and Escape-to-close behavior.
  document.querySelectorAll('[data-preview]').forEach(button => {
    button.addEventListener('click', () => {
      activeProject = button;
      lastPreviewTrigger = button;
      const source = button.querySelector('img');
      const target = preview.querySelector('.preview-image');
      target.src = source.src;
      target.alt = source.alt;
      updatePreview();
      preview.showModal();
      document.body.classList.add('preview-open');
    });
  });
  preview.querySelector('.preview-close').addEventListener('click', () => preview.close());
  preview.addEventListener('click', event => {
    if (event.target !== preview) return;
    const bounds = preview.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) preview.close();
  });
  preview.addEventListener('close', () => {
    document.body.classList.remove('preview-open');
    activeProject = null;
    lastPreviewTrigger?.focus({ preventScroll: true });
  });

  document.querySelector('.copy-email').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('silabarisik@gmail.com');
      copyStatus.textContent = translate('contact.copied');
    } catch {
      copyStatus.textContent = translate('contact.copyFailed');
    }
  });

  document.querySelector('.contact-form').hidden = false;
  document.querySelector('.contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const subject = data.get('subject').trim();
    const message = data.get('message').trim();
    if (!name || !subject || !message) {
      const field = !name ? form.elements.name : !subject ? form.elements.subject : form.elements.message;
      field.setCustomValidity(language === 'tr' ? 'Lütfen bu alanı doldurun.' : 'Please fill out this field.');
      field.reportValidity();
      return;
    }
    const body = `${message}\n\n${name}\n${email}`;
    const draftUrl = `mailto:silabarisik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    formStatus.textContent = translate('form.ready');
    // Opens a compose window; no message is sent by this website.
    window.location.href = draftUrl;
  });
  document.querySelector('.contact-form').addEventListener('input', event => {
    event.target.setCustomValidity('');
    formStatus.textContent = '';
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...navigation.querySelectorAll('a')];
  let scrollScheduled = false;
  function updateNavigation() {
    let currentId = '';
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 165) currentId = section.id;
    }
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentId}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollScheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(updateNavigation);
  }, { passive: true });
  updateNavigation();
})();
