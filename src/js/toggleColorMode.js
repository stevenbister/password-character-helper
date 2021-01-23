import { sun, moon } from './icons';

/**
 * Lightweight dark mode toggle
 *
 * @param {Element} element
 */

function toggleColorMode(element) {
  if (!element) return;

  const html = document.documentElement;

  // Initial vals for click event
  let mode = 'light';
  let icon = moon;

  element.addEventListener('click', () => {
    html.classList.toggle('dark');
    element.setAttribute('aria-label', `Activate ${mode} mode`);
    element.dataset.colorToggle = mode;
    element.innerHTML = icon;

    html.classList.contains('dark') ? (mode = 'dark') : (mode = 'light');

    mode == 'dark' ? (icon = sun) : (icon = moon);
  });
}

export default toggleColorMode;
