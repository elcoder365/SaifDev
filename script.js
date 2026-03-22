// ===== BILINGUAL CONTENT =====
const content = {
  ar: {
    dir: 'rtl',
    nav: { home: 'الرئيسية', about: 'من أنا', aspirations: 'طموحاتي', projects: 'مشاريعي', challenges: 'التحديات', world: 'عالمي', contact: 'تواصل' },
    hero: {
      name: 'سيف الدين',
      tagline: 'أصنع المستقبل بالكود',
      desc: ' شغوف بالأمن السيبراني، ومُحب لاستكشاف عالم الأكواد وصناعة المستقبل.',
      btnProjects: '🚀 مشاريعي',
      btnAbout: '👋 تعرف عليّ',
      typing: ['شغوف في لغة Python 🐍', 'مستكشف أمن سيبراني 🛡️', 'أحب صناعة الانيميشن كهواية 🎬', 'Gamer 🎮', 'Hacker In Training 💻', 'مُتحمس لعالم الذكاء الاصطناعي 🤖']
    },
    about: {
      title: 'من أنا؟',
      text: 'أنا من <strong>مصر</strong>، ولدي أحلام كبيرة أعمل جاهداً على تحقيقها. أطمح بشدة للانضمام إلى <strong>مسابقات وتحديات برمجية</strong> وإثبات نفسي فيها. أحب دائماً تطوير نفسي والتفكير في أفكار جديدة تصنع فارقاً في المستقبل.'
    },
    aspirations: {
      title: 'ما أطمح لتعلمه',
      cards: [
        { icon: '🐍', h: 'Python', p: 'طموح في لغة Python لتطوير أدوات مفيدة وبرامج ذكية.' },
        { icon: '🛡️', h: 'Ethical Hacking', p: 'شغوف بتعلم الاختراق الأخلاقي واستكشاف بيئة Kali Linux.' },
        { icon: '🌐', h: 'Web Development', p: 'أحب بناء مواقع وتطبيقات الويب الحديثة والمبتكرة.' },
        { icon: '🗣️', h: 'English & Challenges', p: 'أسعى لتحسين لغتي الإنجليزية وتحدي نفسي بـ Tongue Twisters.' },
        { icon: '🤖', h: 'Artificial Intelligence', p: 'مُتحمس لاستكشاف عالم الذكاء الاصطناعي (AI) وتعلم كيفية دمجه في تطبيقاتي البرمجية لجعلها أذكى.' },
        { icon: '🎥', h: '3D Animation', p: 'مُصمم على تطوير مهاراتي في تصميم وتحريك الشخصيات لإطلاق قناة يوتيوب احترافية.' }
      ]
    },
    projects: {
      title: 'مشاريعي البرمجية',
      intro: 'أحب تطبيق ما أتعلمه عملياً. من الأشياء التي برمجتها وأفتخر بها:',
      cards: [
        { num: '01', h: 'موقع تحميل فيديوهات', p: 'موقع لتحميل فيديوهات من مختلف المنصات. Backend بـ Python و Frontend بـ HTML و CSS.', tag: 'Python / HTML / CSS' },
        { num: '02', h: 'محول ملفات الميديا', p: 'برنامج Python لتحويل صيغ ملفات الميديا إلى MP3.', tag: 'Python' },
        { num: '03', h: 'مولد قصص الأطفال', p: 'موقع ذكي لتوليد قصص أطفال ممتعة ومبتكرة.', tag: 'Web App' },
        { num: '04', h: 'تطبيق تنظيم الحصص والمصروفات', p: 'تطبيق ذكي لتنظيم الحصص الدراسية وإدارة المصروفات اليومية.', tag: 'App Concept' }
      ]
    },
    challenges: {
      title: 'تحديات الأكواد',
      text: 'في عالم البرمجة، ليس كل شيء يعمل من المرة الأولى! أحياناً أواجه أخطاء برمجية <strong style="color:var(--accent)">(Bugs)</strong> غريبة تجعلني في حيرة تامة... لكني لا أستسلم أبداً حتى أصلح الأكواد وأجد الحل. 💪',
      code: 'while (bug !== null) { debug(); coffee++; }',
      codeExplain: '💡 هذا الكود يعني: طالما هناك خطأ برمجي (Bug)، استمر في إصلاحه (debug) واشرب مزيد من القهوة! ☕'
    },
    myworld: {
      title: 'عالمي الخاص',
      intro: 'بعيداً عن الشاشات والأكواد، أستمتع بوقتي في عالم الألعاب والخيال. لدي شغف كبير بصناعة محتوى وأنيميشن خاص بـ <strong style="color:var(--primary)">ماين كرافت</strong>.',
      games: {
        title: '🎮 ألعابي المفضلة', tags: [
          { name: 'Minecraft', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750456/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864_ywuecj.jpg' },
          { name: 'Clash of Clans', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750555/images_3_puvtzh.webp' },
          { name: 'Subnautica', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750523/capsule_616x353_aditnd.jpg' },
          { name: 'ألعاب الحرب العالمية', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750598/download_2_y7dcl9.jpg' }
        ]
      },
      shows: {
        title: '📺 مسلسلات الطفولة', tags: [
          { name: 'Ninjago', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750857/wallpaperflare.com_wallpaper_oanphk.jpg' },
          { name: 'The Deep', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773751175/maxresdefault_oq1d4f.jpg' },
          { name: 'نوبي ودورايمون', img: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png' }
        ]
      },
      hobby: {
        title: '🎬 هوايتي المميزة', tags: [
          { name: 'صناعة أنيميشن ماين كرافت' },
          { name: 'صناعة محتوى إبداعي' }
        ]
      },
      showcase: {
        ninjago: 'Ninjago (نينجاجو)',
        theDeep: 'The Deep (الأعماق)'
      }
    },
    stats: {
      title: 'بالأرقام',
      items: [
        { num: '7+', label: 'مشاريع برمجية' },
        { num: '4+', label: 'لغات برمجة' },
        { num: '∞', label: 'طموح وإصرار' },
        { num: '♾️', label: 'شغف بالتعلم' }
      ]
    },
    contact: { title: 'تواصل معي', desc: 'يسعدني التواصل معك! يمكنك مراسلتي عبر:' },
    footer: { text: 'تمت البرمجة بواسطة ❤️ <strong style="color:var(--primary)">سيف</strong>', code: 'System.out.println("STAY AWESOME");', codeExplain: '💡 هذا كود بلغة Java يطبع رسالة: "ابقى رائعاً!" — رسالة إيجابية مني لك! ✨' }
  },
  en: {
    dir: 'ltr',
    nav: { home: 'Home', about: 'About', aspirations: 'Aspirations', projects: 'Projects', challenges: 'Challenges', world: 'My World', contact: 'Contact' },
    hero: {
      name: 'Saif Eldin',
      tagline: 'Building the Future with Code',
      desc: 'Passionate about cybersecurity, and loves exploring the world of code and shaping the future.',
      btnProjects: '🚀 Projects',
      btnAbout: '👋 About Me',
      typing: ['Passionate about Python 🐍', 'Cybersecurity Explorer 🛡️', 'Animation Hobby Enthusiast 🎬', 'Gamer 🎮', 'Hacker In Training 💻', 'AI Enthusiast 🤖']
    },
    about: {
      title: 'Who Am I?',
      text: 'I\'m from <strong>Egypt</strong>, with big dreams I\'m working hard to achieve. I aspire to join <strong>programming competitions and challenges</strong> and prove myself. I always love developing myself and thinking of new ideas that make a difference in the future.'
    },
    aspirations: {
      title: 'What I Aspire to Learn',
      cards: [
        { icon: '🐍', h: 'Python', p: 'Aspiring to master Python for building useful tools and smart applications.' },
        { icon: '🛡️', h: 'Ethical Hacking', p: 'Passionate about learning ethical hacking and exploring the Kali Linux environment.' },
        { icon: '🌐', h: 'Web Development', p: 'I love building modern and innovative websites and web applications.' },
        { icon: '🗣️', h: 'English & Challenges', p: 'Working on improving my English and challenging myself with Tongue Twisters.' },
        { icon: '🤖', h: 'Artificial Intelligence', p: 'Excited to explore the world of AI and learn how to integrate it into my apps to make them smarter.' },
        { icon: '🎥', h: '3D Animation', p: 'Determined to develop character design and animation skills to launch a professional YouTube channel.' }
      ]
    },
    projects: {
      title: 'My Projects',
      intro: 'I love applying what I learn in practice. Here are some projects I\'m proud of:',
      cards: [
        { num: '01', h: 'Video Downloader Website', p: 'A website to download videos from various platforms. Backend in Python, Frontend in HTML & CSS.', tag: 'Python / HTML / CSS' },
        { num: '02', h: 'Media File Converter', p: 'A Python program to convert media file formats to MP3.', tag: 'Python' },
        { num: '03', h: 'Children\'s Story Generator', p: 'A smart website for generating fun and creative children\'s stories.', tag: 'Web App' },
        { num: '04', h: 'Schedule & Expenses App', p: 'A smart app concept for organizing school schedules and managing daily expenses.', tag: 'App Concept' }
      ]
    },
    challenges: {
      title: 'Code Challenges',
      text: 'In the world of programming, not everything works on the first try! Sometimes I face weird <strong style="color:var(--accent)">Bugs</strong> that leave me puzzled... but I never give up until I fix the code and find the solution. 💪',
      code: 'while (bug !== null) { debug(); coffee++; }',
      codeExplain: '💡 This code means: as long as there\'s a Bug, keep debugging and drink more coffee! ☕'
    },
    myworld: {
      title: 'My World',
      intro: 'Away from screens and code, I enjoy my time in the world of games and imagination. I have a great passion for creating <strong style="color:var(--primary)">Minecraft</strong> content and animations.',
      games: {
        title: '🎮 Favorite Games', tags: [
          { name: 'Minecraft', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750456/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864_ywuecj.jpg' },
          { name: 'Clash of Clans', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750555/images_3_puvtzh.webp' },
          { name: 'Subnautica', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750523/capsule_616x353_aditnd.jpg' },
          { name: 'WW2 Games', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750598/download_2_y7dcl9.jpg' }
        ]
      },
      shows: {
        title: '📺 Childhood Shows', tags: [
          { name: 'Ninjago', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773750857/wallpaperflare.com_wallpaper_oanphk.jpg' },
          { name: 'The Deep', img: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773751175/maxresdefault_oq1d4f.jpg' },
          { name: 'Nobita & Doraemon', img: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png' }
        ]
      },
      hobby: {
        title: '🎬 Special Hobby', tags: [
          { name: 'Minecraft Animation' },
          { name: 'Creative Content Creation' }
        ]
      },
      showcase: {
        ninjago: 'Ninjago',
        theDeep: 'The Deep'
      }
    },
    stats: {
      title: 'By the Numbers',
      items: [
        { num: '7+', label: 'Projects Built' },
        { num: '4+', label: 'Languages' },
        { num: '∞', label: 'Ambition & Grit' },
        { num: '♾️', label: 'Passion to Learn' }
      ]
    },
    contact: { title: 'Get in Touch', desc: 'I\'d love to hear from you! Feel free to reach out:' },
    footer: { text: 'Coded with ❤️ by <strong style="color:var(--primary)">Saif</strong>', code: 'System.out.println("STAY AWESOME");', codeExplain: '💡 This Java code prints: "STAY AWESOME!" — a positive message from me to you! ✨' }
  }
};

// ===== IMAGE URLS (Cloudinary CDN) =====
const images = {
  hero: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773709004/Gemini_Generated_Image_v6wcdcv6wcdcv6wc_zvvxrz.png',
  about: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773708522/Gemini_Generated_Image_wu7r03wu7r03wu7r-removebg-preview_nexy9p.png',
  aspirations: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773748228/Gemini_Generated_Image_bxoqidbxoqidbxoq-removebg-preview_qmxlao.png',
  projects: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773708971/Gemini_Generated_Image_eulq3oeulq3oeulq-removebg-preview_zt7z6y.png',
  challenges: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773708529/Gemini_Generated_Image_wym0ktwym0ktwym0-removebg-preview_k2phix.png',
  myworld: 'https://res.cloudinary.com/dp0df8dxy/image/upload/v1773708528/Gemini_Generated_Image_w46jsbw46jsbw46j-removebg-preview_xcgrjr.png'
};

// ===== STATE =====
if (!localStorage.getItem('en_default_set')) {
  localStorage.setItem('lang', 'en');
  localStorage.setItem('en_default_set', 'true');
}
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let typingTimer = null;

// ===== PRELOADER =====
window.addEventListener('load', () => {
  // Preload all images
  const imgPromises = Object.values(images).map(src => {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.src = src;
    });
  });
  Promise.all(imgPromises).then(() => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 400);
  });
  // Fallback: hide preloader after 3s max
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 3000);
});

// ===== RENDER PAGE =====
function renderPage() {
  const lang = content[currentLang];
  const d = document;
  d.body.dir = lang.dir;
  d.documentElement.lang = currentLang;

  // Nav links
  d.getElementById('navHome').textContent = lang.nav.home;
  d.getElementById('navAbout').textContent = lang.nav.about;
  d.getElementById('navAspirations').textContent = lang.nav.aspirations;
  d.getElementById('navProjects').textContent = lang.nav.projects;
  d.getElementById('navChallenges').textContent = lang.nav.challenges;
  d.getElementById('navWorld').textContent = lang.nav.world;
  d.getElementById('navContact').textContent = lang.nav.contact;

  // Hero
  d.getElementById('heroName').textContent = lang.hero.name;
  d.getElementById('heroTagline').textContent = lang.hero.tagline;
  d.getElementById('heroDesc').textContent = lang.hero.desc;
  d.getElementById('heroBtnProjects').textContent = lang.hero.btnProjects;
  d.getElementById('heroBtnAbout').textContent = lang.hero.btnAbout;
  d.getElementById('heroImg').src = images.hero;

  // About
  d.getElementById('aboutTitle').innerHTML = '<span>' + lang.about.title + '</span>';
  d.getElementById('aboutText').innerHTML = lang.about.text;
  d.getElementById('aboutImg').src = images.about;

  // Aspirations
  d.getElementById('aspirationsTitle').innerHTML = '<span>' + lang.aspirations.title + '</span>';
  d.getElementById('aspirationsImg').src = images.aspirations;
  const aspireGrid = d.getElementById('aspireGrid');
  aspireGrid.innerHTML = lang.aspirations.cards.map(c =>
    `<div class="aspire-card reveal"><span class="icon">${c.icon}</span><h3>${c.h}</h3><p>${c.p}</p></div>`
  ).join('');

  // Projects
  d.getElementById('projectsTitle').innerHTML = '<span>' + lang.projects.title + '</span>';
  d.getElementById('projectsIntro').textContent = lang.projects.intro;
  d.getElementById('projectsImg').src = images.projects;
  const projGrid = d.getElementById('projGrid');
  projGrid.innerHTML = lang.projects.cards.map(c =>
    `<div class="project-card reveal"><span class="num">${c.num}</span><h3>${c.h}</h3><p>${c.p}</p><span class="tag">${c.tag}</span></div>`
  ).join('');

  // Challenges
  d.getElementById('challengesTitle').innerHTML = '<span>' + lang.challenges.title + '</span>';
  d.getElementById('challengeText').innerHTML = lang.challenges.text;
  d.getElementById('challengeCode').textContent = lang.challenges.code;
  d.getElementById('challengeImg').src = images.challenges;

  // My World (Shows Showcase)
  if (d.getElementById('ninjagoTitle')) d.getElementById('ninjagoTitle').textContent = lang.myworld.showcase.ninjago;
  if (d.getElementById('theDeepTitle')) d.getElementById('theDeepTitle').textContent = lang.myworld.showcase.theDeep;

  // My World
  d.getElementById('myworldTitle').innerHTML = '<span>' + lang.myworld.title + '</span>';
  d.getElementById('worldIntro').innerHTML = lang.myworld.intro;
  d.getElementById('worldImg').src = images.myworld;
  const worldGrid = d.getElementById('worldGrid');
  worldGrid.innerHTML = [lang.myworld.games, lang.myworld.shows, lang.myworld.hobby].map(c =>
    `<div class="world-card reveal"><h3>${c.title}</h3><div class="tags">${c.tags.map(t => t.img ? `<span class="tag-hover">${t.name}<img src="${t.img}" class="hover-img" loading="lazy"></span>` : `<span>${t.name}</span>`).join('')}</div></div>`
  ).join('');

  // Stats
  d.getElementById('statsTitle').innerHTML = '<span>' + lang.stats.title + '</span>';
  const statsGrid = d.getElementById('statsGrid');
  statsGrid.innerHTML = lang.stats.items.map(s =>
    `<div class="stat-card reveal"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`
  ).join('');

  // Contact
  d.getElementById('contactTitle').innerHTML = '<span>' + lang.contact.title + '</span>';
  d.getElementById('contactDesc').textContent = lang.contact.desc;

  // Footer
  d.getElementById('footerText').innerHTML = lang.footer.text;
  d.getElementById('footerCode').textContent = lang.footer.code;

  // Code tooltips
  d.getElementById('challengeTooltip').textContent = lang.challenges.codeExplain;
  d.getElementById('footerTooltip').textContent = lang.footer.codeExplain;

  // Language btn label
  d.getElementById('langBtn').textContent = currentLang === 'ar' ? 'EN' : 'عربي';

  // Re-init reveals & 3D
  initReveals();
  init3DTilt();
  staggerGrids();

  // Restart typing
  startTyping();
}

// ===== THEME TOGGLE =====
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeBtn').textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme();
}

// ===== LANGUAGE TOGGLE =====
function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('lang', currentLang);
  renderPage();
}

// ===== PARTICLE SYSTEM =====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.r = Math.random() * 2 + 0.5;
    this.dx = (Math.random() - 0.5) * 0.6; this.dy = (Math.random() - 0.5) * 0.6;
    this.o = Math.random() * 0.4 + 0.1;
    this.color = Math.random() > 0.5 ? '0,245,212' : '123,47,247';
  }
  update() {
    this.x += this.dx; this.y += this.dy;
    if (this.x < 0 || this.x > W) this.dx *= -1;
    if (this.y < 0 || this.y > H) this.dy *= -1;
  }
  draw() {
    ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.o})`; ctx.fill();
  }
}
for (let i = 0; i < 100; i++) particles.push(new Particle());

let mouse = { x: null, y: null };
window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

function animateParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 120) {
        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,245,212,${0.06 * (1 - d / 120)})`; ctx.stroke();
      }
    }
    if (mouse.x) {
      const dx = particles[i].x - mouse.x, dy = particles[i].y - mouse.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 150) {
        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(0,245,212,${0.12 * (1 - d / 150)})`; ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== TYPING EFFECT =====
function startTyping() {
  if (typingTimer) clearTimeout(typingTimer);
  const titles = content[currentLang].hero.typing;
  let ti = 0, ci = 0, deleting = false;
  const el = document.getElementById('typeTarget');

  function type() {
    const current = titles[ti];
    if (!deleting) {
      el.textContent = current.substring(0, ci + 1); ci++;
      if (ci === current.length) { deleting = true; typingTimer = setTimeout(type, 1800); return; }
    } else {
      el.textContent = current.substring(0, ci - 1); ci--;
      if (ci === 0) { deleting = false; ti = (ti + 1) % titles.length; typingTimer = setTimeout(type, 400); return; }
    }
    typingTimer = setTimeout(type, deleting ? 50 : 100);
  }
  type();
}

// ===== SCROLL REVEALS =====
let revealObserver;
function initReveals() {
  if (revealObserver) revealObserver.disconnect();
  const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => revealObserver.observe(el));
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  const scrollBtn = document.getElementById('scrollTop');
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

// ===== ACTIVE NAV LINK =====
function updateActiveNav() {
  const sections = ['hero', 'about', 'aspirations', 'projects', 'challenges', 'myworld', 'stats'];
  const scrollY = window.scrollY + 200;
  sections.forEach(id => {
    const sec = document.getElementById(id);
    if (!sec) return;
    const link = document.querySelector(`.nav-center a[href="#${id}"]`);
    if (!link) return;
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// ===== 3D TILT =====
function init3DTilt() {
  document.querySelectorAll('.project-card,.aspire-card,.stat-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) scale(1.02) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

// ===== STAGGER GRIDS =====
function staggerGrids() {
  document.querySelectorAll('.aspire-grid,.projects-grid,.world-grid,.stats-grid').forEach(grid => {
    const cards = grid.querySelectorAll('.reveal');
    cards.forEach((c, i) => { c.style.transitionDelay = `${i * 0.12}s`; });
  });
}

// ===== MOBILE MENU =====
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('navCenter').classList.toggle('open');
});
// Close menu on link click
document.getElementById('navCenter').addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    document.getElementById('navCenter').classList.remove('open');
  }
});

// ===== SCROLL TO TOP =====
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== INIT =====
applyTheme();
renderPage();
initAudioPlayers();

// ===== DYNAMIC MOUSE GLOW (WOW FACTOR) =====
document.addEventListener('mousemove', e => {
  const target = e.target.closest('.aspire-card, .project-card, .world-card, .showcase-card, .track-box');
  if (target) {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  }
});

// ===== CUSTOM AUDIO PLAYERS =====
function initAudioPlayers() {
  document.querySelectorAll('.custom-audio-player').forEach(player => {
    const audio = player.querySelector('audio');
    const btn = player.querySelector('.play-pause-btn');
    const progressWrap = player.querySelector('.progress-wrap');
    const progressFilled = player.querySelector('.progress-filled');
    const timeDisplay = player.querySelector('.time-display');
    const trackImg = player.closest('.track-box')?.querySelector('.track-img');

    let isDragging = false;

    function formatTime(time) {
      if (!time || isNaN(time)) return '0:00';
      const mins = Math.floor(time / 60);
      const secs = Math.floor(time % 60);
      return `${mins}:${secs < 10 ? '0' + secs : secs}`;
    }

    function togglePlay() {
      if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) a.pause(); });
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    }

    btn.addEventListener('click', togglePlay);

    audio.addEventListener('play', () => {
      btn.innerHTML = '⏸'; btn.classList.add('playing');
      if (trackImg) trackImg.classList.add('playing');
    });

    audio.addEventListener('pause', () => {
      btn.innerHTML = '▶'; btn.classList.remove('playing');
      if (trackImg) trackImg.classList.remove('playing');
    });

    progressWrap.addEventListener('click', (e) => {
      if (!audio.duration || isNaN(audio.duration)) return;
      const rect = progressWrap.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = clickX / rect.width;
      audio.currentTime = percent * audio.duration;
      // Immediate visual update
      progressFilled.style.width = `${percent * 100}%`;
      timeDisplay.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('timeupdate', () => {
      if (!audio.duration || isNaN(audio.duration) || isDragging) return;
      const percent = (audio.currentTime / audio.duration) * 100;
      progressFilled.style.width = `${percent}%`;
      timeDisplay.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
      progressFilled.style.width = '0%';
      timeDisplay.textContent = '0:00';
    });
  });
}
