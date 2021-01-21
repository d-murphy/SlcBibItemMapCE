
// When the extension is installed
chrome.runtime.onInstalled.addListener(function(){
    // Replace all rules
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
      // With new rule
      chrome.declarativeContent.onPageChanged.addRules([
        {
          // That fires when a page's URL contains
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { urlContains: 'search.livebrary.com'},
            })
          ],
          // And shows the extension's page action.
          actions: [ new chrome.declarativeContent.ShowPageAction()]
        }
      ])
    })
})

//chrome.pageAction.show();


