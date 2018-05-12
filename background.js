chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({file: 'jquery.js'},function() {
    chrome.tabs.executeScript({file: 'content.js'});
  });
});
