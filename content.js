(async function() {
  const getText = (selector) => {
    const el = document.querySelector(selector);
    return el ? el.innerText.trim() : '';
  };
  const getNumber = (selector) => {
    const txt = getText(selector).replace(/[^\d]/g, '');
    return txt ? parseInt(txt, 10) : 0;
  };

  // Adjust selectors as per LinkedIn's DOM (may need updates)
  const name = getText('.text-heading-xlarge, .top-card-layout__title');
  const location = getText('.text-body-small.inline.t-black--light.break-words, .top-card__subline-item');
  const about = getText('.pv-about__summary-text, .summary');
  const bio = getText('.text-body-medium.break-words, .top-card-layout__headline');
  const followerCount = getNumber('.text-body-small.t-black--light span');
  const connectionCount = getNumber('.top-card__subline-item span');
  const bioLine = getText('.text-body-medium.break-words, .top-card-layout__headline');

  const url = window.location.href;

  // Post to API
  await fetch('http://localhost:3000/api/profiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, url, about, bio, location, followerCount, connectionCount, bioLine })
  });

  // Move to next profile using currentIndex
  chrome.storage.local.get(['linkedinLinks', 'scraping', 'currentIndex'], ({ linkedinLinks, scraping, currentIndex }) => {
    if (!scraping) return;
    const nextIndex = (currentIndex || 0) + 1;
    if (linkedinLinks && nextIndex < linkedinLinks.length) {
      chrome.storage.local.set({ currentIndex: nextIndex }, () => {
        setTimeout(() => {
          window.location.href = linkedinLinks[nextIndex];
        }, 2000); // Wait 2s before navigating
      });
    } else {
      chrome.storage.local.set({ scraping: false, currentIndex: 0 });
      chrome.runtime.sendMessage({
        type: 'SHOW_SCRAPE_COMPLETE_NOTIFICATION'
        });
    }
  });
})();