chrome.runtime.onInstalled.addListener(async () => {
  const tabs = await chrome.tabs.query({ url: ["https://www.youtube.com/*"] });
  tabs.forEach((tab) => {
    insertCSS(tab);
  });
});

function insertCSS(tab) {
  chrome.scripting.insertCSS({
    files: ["youtube-shorts-remover.css"],
    target: { tabId: tab.id },
  });
}
