function switchTab(btn, panelId) {
    document.querySelectorAll('.apt-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.apt-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(panelId).classList.add('active');
  }
 
 function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type=submit]');
  
  const name = form.querySelector('input[type=text]').value;
  const phone = form.querySelector('input[type=tel]').value;
  const apt = form.querySelectorAll('select')[0].value || 'не указано';
  const payment = form.querySelectorAll('select')[1].value || 'не указано';

  const TOKEN = '8655237689:AAFh4k_XrM-bLyGAJv8n0Atvj_8Uh4ZOspw';
  const CHAT_ID = '1491556657';
  const text = ` Новая заявка — ЖК Kosmonavtova\n\nИмя: ${name}\nТелефон: ${phone}\nКвартира: ${apt}\nОплата: ${payment}`;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text })
  });

  btn.textContent = 'Заявка отправлена';
  btn.style.background = '#4a7c59';
  btn.disabled = true;
}
 
  //опасити на скролле
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(26,28,32,0.98)';
    } else {
      nav.style.background = 'rgba(26,28,32,0.92)';
    }
  });

  function toggleCallback() {
  const panel = document.getElementById('callbackPanel');
  const btn = document.querySelector('.callback-btn');
  panel.classList.toggle('open');
  btn.classList.toggle('hidden');
}

function handleCallback(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type=submit]');

  const name = form.querySelector('input[type=text]').value;
  const phone = form.querySelector('input[type=tel]').value;

  const TOKEN = '8655237689:AAFh4k_XrM-bLyGAJv8n0Atvj_8Uh4ZOspw';
  const CHAT_ID = '1491556657';
  const text = `Обратный звонок — ЖК Kosmonavtova\n\nИмя: ${name}\nТелефон: ${phone}`;

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text })
  })
  .then(r => r.json())
  .then(d => console.log(d))
  .catch(err => console.log(err));

  btn.textContent = 'Заявка отправлена';
  btn.style.background = '#4a7c59';
  btn.disabled = true;
}

const planIndexes = { 'plan2-img': 0, 'plan3-img': 0, 'plan4-img': 0 };
const planCounters = { 'plan2-img': 'plan2-counter', 'plan3-img': 'plan3-counter', 'plan4-img': 'plan4-counter' };

function switchPlan(imgId, plans, dir) {
  planIndexes[imgId] = (planIndexes[imgId] + dir + plans.length) % plans.length;
  document.getElementById(imgId).src = plans[planIndexes[imgId]];
  document.getElementById(planCounters[imgId]).textContent = (planIndexes[imgId] + 1) + ' / ' + plans.length;
}

function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  const burger = document.querySelector('.burger');
  menu.classList.toggle('open');
  burger.classList.toggle('open');
  burger.style.zIndex = menu.classList.contains('open') ? '200' : '100';
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
    document.querySelector('.burger').classList.remove('open');
  });
});

// Countdown
function updateCountdown() {
  const target = new Date('2026-11-23T23:59:59');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '00';
    document.getElementById('cd-hours').textContent = '00';
    document.getElementById('cd-minutes').textContent = '00';
    document.getElementById('cd-seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('cd-seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// WhatsApp появляется только в секции contact
const whatsappBtn = document.querySelector('.whatsapp-btn');
const contactSection = document.getElementById('contact');

const whatsappObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      whatsappBtn.classList.add('visible');
    } else {
      whatsappBtn.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

whatsappObserver.observe(contactSection);

// Scroll to top
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// Lightbox
const lightboxImages = [
  'territorya.png', 'dvor.png', 'detskaya.png',
  'tren.png', 'otdyh.png', 'parking.png',
  'lobby.png', 'vid.png', 'coffee.png'
];
let lightboxIndex = 0;

function openLightbox(src, e) {
  if (e) e.stopPropagation();
  lightboxIndex = lightboxImages.indexOf(src);
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox(e) {
  if (e) e.stopPropagation();
  document.getElementById('lightbox').classList.remove('open');
}

function lightboxNav(dir, e) {
  if (e) e.stopPropagation();
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}

function updateLightbox() {
  document.getElementById('lightbox-img').src = lightboxImages[lightboxIndex];
  document.getElementById('lightbox-counter').textContent = (lightboxIndex + 1) + ' / ' + lightboxImages.length;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft') lightboxNav(-1);
});

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});
