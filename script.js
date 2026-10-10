const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#service').value = link.dataset.service;
}));
document.querySelector('#project-form').addEventListener('submit', event => {
  event.preventDefault();
  const service = document.querySelector('#service').value;
  const message = document.querySelector('#message').value.trim();
  if (!message) {
    document.querySelector('#form-status').textContent = 'Beschrijf eerst kort je project.';
    document.querySelector('#message').focus();
    return;
  }
  const href = `mailto:info@elektro-verschaeve.be?subject=${encodeURIComponent('Vraag over ' + service)}&body=${encodeURIComponent('Hallo Elektro-Verschaeve,\n\n' + message + '\n\nMet vriendelijke groeten,\n')}`;
  document.querySelector('#email-fallback').href = href;
  document.querySelector('#form-status').textContent = 'Je e-mailprogramma wordt geopend. Nog niets verstuurd. Opent het niet? Gebruik de e-maillink hierboven of bel ons.';
  window.location.href = href;
});
document.querySelector('#year').textContent = new Date().getFullYear();
