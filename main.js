document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  animateHero();
});

function animateHero() {
  const name = document.querySelector('.hero__name');
  const tagline = document.querySelector('.hero__tagline');
  const socials = document.querySelector('.socials');

  requestAnimationFrame(() => {
    name.classList.add('is-visible');

    setTimeout(() => {
      tagline.classList.add('is-visible');
    }, 500);

    setTimeout(() => {
      socials.classList.add('is-visible');
    }, 1100);
  });
}
