console.log('test - I said its a test!!!')

var openNewTab = function(){

    console.log("test")

    chrome.tabs.create({ url: "http://www.google.com" });
}

