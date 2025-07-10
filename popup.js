document.getElementById('get-title').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const title = tabs[0].title;
    document.getElementById('title-output').textContent = title;
  });
});
