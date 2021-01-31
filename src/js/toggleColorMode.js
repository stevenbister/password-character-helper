import { sun, moon } from './icons';
// TODO: Write tests

/**
 * Lightweight dark mode toggle
 *
 * @param {Element} element
 */

function toggleColorMode(element, colorMode) {
  if (!element) return;

  const html = document.documentElement;

  // Initial vals for click event
  let mode = colorMode || 'light';
  let icon = sun;

  html.classList.add(mode);

  const setIcon = () => {
    mode == 'light' ? (icon = sun) : (icon = moon);
    element.innerHTML = icon;
  };
  setIcon();

  // Register the click event
  element.addEventListener('click', () => {
    // Set the mode
    mode == 'light' ? (mode = 'dark') : (mode = 'light');

    // Updated localstorage
    localStorage.setItem('preferredColorMode', mode);

    // Update the aria and data attributes
    element.dataset.colorToggle = mode == 'light' ? 'dark' : 'light';
    element.setAttribute(
      'aria-label',
      `Activate ${mode == 'light' ? 'dark' : 'light'} mode`
    );

    // Add class to the html
    html.classList.toggle('dark');

    // Update the button's icon
    setIcon();
  });
}

export default toggleColorMode;
