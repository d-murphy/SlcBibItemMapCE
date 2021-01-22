var bibItems = [];

document
  .querySelectorAll('.bibItemsEntry')
  .forEach((element)=> { 
    bibItems.push({
      library: element.cells[0].innerText.split("-")[0].trim(),
      collection: element.cells[0].innerText.split("-")[1].trim(),
      libraryUrl: element.cells[0].querySelector('a').getAttribute('href'),
      callNumber: element.cells[1].innerText.trim(),
      barCode: element.cells[3].innerText.trim(),
      lastCheckIn: element.cells[4].innerText.trim(),
      status: element.cells[5].innerText.trim()
    })
  })

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    switch(message.type) {
      case "getBibItems":
        sendResponse(bibItems);
        break;
      default:
        console.error("Unrecognised message: ", message);
    }
  }
);