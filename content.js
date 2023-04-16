if (window.location.href.startsWith("chrome-extension://")) {
  var dogImage = new Image();
  dogImage.src = chrome.extension.getURL("dog.jpg");
  document.body.style.backgroundImage = `url(${dogImage.src})`;
}
