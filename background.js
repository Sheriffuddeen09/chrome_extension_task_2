chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('linkedin.com/in/')) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js']
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SHOW_SCRAPE_COMPLETE_NOTIFICATION') {
    chrome.notifications.create('scrapeComplete', {
      type: 'progress',
      iconUrl: 'icon.png',
      title: 'Scraping Complete!',
      message: 'All LinkedIn profiles have been scraped.',
      progress: 100
    });

    // Animate the progress bar reducing over 5 seconds
    let progress = 100;
    const interval = setInterval(() => {
      progress -= 2;
      chrome.notifications.update('scrapeComplete', {
        progress: progress
      });
      if (progress <= 0) {
        clearInterval(interval);
        chrome.notifications.clear('scrapeComplete');
      }
    }, 100); // 100ms * 50 = 5s
  }
});