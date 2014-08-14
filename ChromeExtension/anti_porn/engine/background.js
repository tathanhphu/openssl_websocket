chrome.webRequest.onHeadersReceived.addListener(function (details) {
    for (i = 0; i < details.responseHeaders.length; i++) {
		if (details.responseHeaders[i].name == "description")
			alert(details.responseHeaders[i].name +' = '+ details.responseHeaders[i].value);
    }
	//alert(header);
    return {
        responseHeaders: details.responseHeaders
    };
}, {
    urls: ["<all_urls>"],
},
	["blocking", "responseHeaders"]
);

var optionWnd = undefined;
chrome.browserAction.onClicked.addListener(function (tab) {
    if (optionWnd != undefined) {
        if (optionWnd.closed) {
            optionWnd = undefined;
        }
    }
    if (optionWnd == undefined) {
        optionWnd = window.open('engine/background.html');
    }
    optionWnd.focus();
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
      if (request.action == "close") {
          //alert("goodbye");
          optionWnd.close();
          optionWnd = undefined;
      }
  });