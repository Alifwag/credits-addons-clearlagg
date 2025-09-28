// ====================== 🌍 Auto Translate ======================
const translations = {
  id: {
    fungsi: "Membersihkan entity berlebih agar server tetap ringan dan tidak lag.",
    komunitas: "Bergabunglah dengan komunitas kami untuk berdiskusi, berbagi tips, dan update terbaru ✨",
    credits: "Dikembangkan dengan ❤️ oleh komunitas untuk semua pemain Minecraft."
  },
  en: {
    fungsi: "Removes excessive entities so the server stays light and lag-free.",
    komunitas: "Join our community to discuss, share tips, and get the latest updates ✨",
    credits: "Developed with ❤️ by the community for all Minecraft players."
  },
  ms: {
    fungsi: "Menghapus entiti berlebihan supaya server lebih lancar dan tidak lag.",
    komunitas: "Sertai komuniti kami untuk berbincang, berkongsi tip, dan dapatkan kemas kini terkini ✨",
    credits: "Dibangunkan dengan ❤️ oleh komuniti untuk semua pemain Minecraft."
  },
  jp: {
    fungsi: "余分なエンティティを削除して、サーバーを軽くラグなしにします。",
    komunitas: "私たちのコミュニティに参加して、議論、ヒントの共有、最新情報を入手しましょう ✨",
    credits: "コミュニティによって❤️を込めて開発され、すべてのMinecraftプレイヤーに提供します。"
  },
  fr: {
    fungsi: "Supprime les entités excessives pour que le serveur reste fluide et sans décalage.",
    komunitas: "Rejoignez notre communauté pour discuter, partager des astuces et obtenir les dernières mises à jour ✨",
    credits: "Développé avec ❤️ par la communauté pour tous les joueurs de Minecraft."
  },
  de: {
    fungsi: "Entfernt übermäßige Entitäten, damit der Server leicht und ruckelfrei bleibt.",
    komunitas: "Treten Sie unserer Community bei, um zu diskutieren, Tipps zu teilen und die neuesten Updates zu erhalten ✨",
    credits: "Mit ❤️ von der Community für alle Minecraft-Spieler entwickelt."
  },
  es: {
    fungsi: "Elimina entidades excesivas para que el servidor se mantenga ligero y sin lag.",
    komunitas: "Únete a nuestra comunidad para discutir, compartir consejos y obtener las últimas actualizaciones ✨",
    credits: "Desarrollado con ❤️ por la comunidad para todos los jugadores de Minecraft."
  },
  zh: {
    fungsi: "移除过多的实体，让服务器保持轻便不卡顿。",
    komunitas: "加入我们的社区，讨论、分享技巧并获取最新更新 ✨",
    credits: "由社区用 ❤️ 开发，献给所有Minecraft玩家。"
  },
  ru: {
    fungsi: "Удаляет избыточные сущности, чтобы сервер оставался лёгким и без лагов.",
    komunitas: "Присоединяйтесь к нашему сообществу, чтобы обсуждать, делиться советами и получать последние обновления ✨",
    credits: "Разработано с ❤️ сообществом для всех игроков Minecraft."
  },
  ar: {
    fungsi: "يزيل الكيانات الزائدة ليظل الخادم خفيفًا وخاليًا من التقطيع.",
    komunitas: "انضم إلى مجتمعنا لمناقشة ومشاركة النصائح والحصول على آخر التحديثات ✨",
    credits: "تم تطويره ❤️ من قبل المجتمع لجميع لاعبي ماينكرافت."
  }
};

// Deteksi bahasa browser
const userLang = navigator.language.slice(0, 2);
const pageType = document.body.getAttribute("data-page"); // gunakan data-page di setiap html
const target = document.getElementById("translate");

if (target && translations[userLang]) {
  const text = translations[userLang][pageType] || translations["en"][pageType];
  target.innerHTML = `<p style="margin-top:1rem;color:#94a3b8;font-style:italic;">🌍 ${text}</p>`;
}

// ====================== 🎇 Efek Ripple Tombol ======================
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    let size = Math.max(btn.clientWidth, btn.clientHeight);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = e.clientX - btn.offsetLeft - size / 2 + 'px';
    ripple.style.top = e.clientY - btn.offsetTop - size / 2 + 'px';

    // Warna ripple random tipis
    const colors = ['rgba(255,255,255,0.6)', 'rgba(56,189,248,0.6)', 'rgba(255,215,0,0.6)'];
    ripple.style.background = colors[Math.floor(Math.random() * colors.length)];

    btn.appendChild(ripple);
    setTimeout(() => { ripple.remove(); }, 800);
  });
});


// ====================== 🌌 Parallax Background ======================
document.addEventListener('mousemove', e => {
  let x = (e.clientX / window.innerWidth - 0.5) * 10;
  let y = (e.clientY / window.innerHeight - 0.5) * 10;
  document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// ====================== 🎭 Animasi Card Masuk ======================
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'all 0.8s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 300); // delay tiap card
  });
});

// ====================== ✨ Sparkle di Judul ======================
const title = document.querySelector('h1');
if (title) {
  setInterval(() => {
    let sparkle = document.createElement('span');
    sparkle.textContent = '✦';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '14px';
    sparkle.style.color = '#38bdf8';
    sparkle.style.left = (title.offsetLeft + Math.random() * title.clientWidth) + 'px';
    sparkle.style.top = (title.offsetTop - 10) + 'px';
    sparkle.style.opacity = 1;
    sparkle.style.transition = 'all 1s ease-out';

    document.body.appendChild(sparkle);
    setTimeout(() => {
      sparkle.style.opacity = 0;
      sparkle.style.top = title.offsetTop - 30 + 'px';
    }, 50);
    setTimeout(() => sparkle.remove(), 1000);
  }, 1500);
                    }
