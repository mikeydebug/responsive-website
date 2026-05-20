// Mobile Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu   = document.getElementById('mobileMenu');
const mobileOverlay= document.getElementById('mobileOverlay');

function openMenu() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburgerBtn?.addEventListener('click', openMenu);
closeMenuBtn?.addEventListener('click', closeMenu);
mobileOverlay?.addEventListener('click', closeMenu);

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
