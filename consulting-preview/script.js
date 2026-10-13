const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded','false');
      menuButton.setAttribute('aria-label','Open navigation');
    }
  });
}
const year = document.getElementById('year');
if(year) year.textContent = String(new Date().getFullYear());
const briefButton = document.getElementById('brief-button');
const copyStatus = document.getElementById('copy-status');
if (briefButton && copyStatus) {
  briefButton.addEventListener('click', async () => {
    const template = `AMBC Consulting Inquiry\n\nBusiness / organization:\nYour role:\nDecision or challenge:\nWhat information is available:\nTimeline:\nWhat would a useful outcome look like:\nPreferred next step:`;
    try {
      await navigator.clipboard.writeText(template);
      copyStatus.textContent = 'Inquiry template copied to clipboard.';
    } catch {
      copyStatus.textContent = 'Clipboard access is unavailable here. Please copy the template from docs/CLIENT_INQUIRY_TEMPLATE.md.';
    }
  });
}