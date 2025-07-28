document.getElementById('start').onclick = async function() {
  const links = document.getElementById('links').value
    .split('\n')
    .map(l => l.trim())
    .filter(l => l);
  if (links.length < 3) {
    document.getElementById('status').innerText = 'Please enter at least 3 links.';
    return;
  }
  chrome.storage.local.set({ linkedinLinks: links, scraping: true, currentIndex: 0 }, () => {
    chrome.tabs.create({ url: links[0] });
    document.getElementById('status').innerText = 'Started. Please keep this window open.';
  });
};

document.getElementById('delete-all').onclick = async function() {
  const res = await fetch('http://localhost:3000/api/profiles', { method: 'DELETE' });
  if (res.ok) {
    alert('All profiles deleted!');
  } else {
    alert('Failed to delete profiles.');
  }
};