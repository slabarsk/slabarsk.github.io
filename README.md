# Sıla Barışık — kişisel web sitesi

GitHub Pages üzerinde çalışan, derleme gerektirmeyen HTML/CSS/JavaScript portföyü.

## Yerel önizleme

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Tarayıcıda `http://127.0.0.1:4173` adresini açın.

- `index.html`: İngilizce içerik, bölüm düzeni ve gerçek profil/belge bağlantıları.
- `style.css`: renkler, tipografi, mobil düzen, azaltılmış hareket ve yazdırma stilleri.
- `script.js`: Türkçe çeviriler, dil tercihi, mobil menü, proje önizlemesi ve iletişim.
- `assets/portfolio/`: Kullanıcının paylaştığı PNG portre, referans Bubble sitesinden alınmış AVIF görseller ve proje sayfalarından alınmış JPEG ekran görüntüleri yerel olarak sunulur.
- `about.html`: Eski bağlantılar için `/#about` yönlendirmesi.

İngilizce varsayılandır; ziyaretçinin TR/EN tercihi tarayıcıda saklanır. İngilizce bir metin değiştirildiğinde aynı `data-i18n` anahtarının Türkçe karşılığı da `script.js` içinde güncellenmelidir.

İletişim formu `mailto:` ile ziyaretçinin e-posta uygulamasında taslak açar. Sunucuya form verisi göndermez ve gönderildi bildirimi göstermez. JavaScript kapalıysa doğrudan e-posta bağlantısı kullanılabilir. CV düğmesi e-postayla CV talebi açar; mevcut olmayan bir indirme dosyasına bağlanmaz.

## İçerik kaynağı

CV bilgileri, proje açıklamaları, görseller ve sertifika bağlantıları kullanıcının paylaştığı ekran görüntüleri ile [Bubble referans sayfasından](https://sla-bark-40683.bubbleapps.io/version-test) aktarılmıştır. İş deneyimi, son paylaşılan LinkedIn ekran görüntüsüne göre güncellenmiştir: Aicado / Growth (Ağustos 2024–günümüz), Kodsuz / Developer (Haziran 2023–Ağustos 2026); her ikisi de tam zamanlıdır. Gönüllülük tarihleri Bubble referansındaki biçimiyle korunmuştur. Görseller yereldir; sertifika PDF'leri mevcut Bubble CDN bağlantılarını kullanır. Inter yazı tipi yüklenemezse sistem yazı tipi kullanılır.

Hırdavatçı AI kartının açıklaması ve ekran görüntüsü [Kodsuz proje sayfasından](https://kodsuz.ai/vitrin/hirdavatciai/) alınmıştır. Kodsuz kartı [güncel ana sayfanın](https://kodsuz.ai/) ekran görüntüsünü kullanır. Proje kartları yalnızca görsel önizlemesi açar; dış bağlantı içermez.

## Hızlı kontrol

```sh
node --check script.js
git diff --check
```

Masaüstü ve mobil görünümde dil geçişini, menüyü, proje önizlemesini, bölüm bağlantılarını ve form doğrulamasını kontrol edin. Yayımlama GitHub Pages üzerinden yapılır.
