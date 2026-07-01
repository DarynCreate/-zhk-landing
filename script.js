function switchTab(btn, panelId) {
    document.querySelectorAll('.apt-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.apt-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(panelId).classList.add('active');
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
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
  const btn = e.target.querySelector('button[type=submit]');
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
  document.querySelector('.nav-links').classList.toggle('open');
  document.querySelector('.burger').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
    document.querySelector('.burger').classList.remove('open');
  });
});
