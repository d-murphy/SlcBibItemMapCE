console.log('test - I said its a test!!!')

var openNewTab = function(){

    console.log("test")

    chrome.tabs.create({ url: "http://www.google.com" });
}

	var mymap = L.map('mapid').setView([40.868617, -72.800553], 9);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVycGh5ZGFucyIsImEiOiJja2s3cDRqajMwZzFyMnZvNDM5ZHEzdWI3In0.RS25NM_XAd4r6ZVgNPYm5A', {
		maxZoom: 18,
//		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(mymap);
    

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {type: "getBibItems"}, function(bibItems) {
           console.log(bibItems);
  });
});


// // query retrieves the current tab, omit object to return all
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.tabs.sendMessage(tabs[0].id, { msg: "Button clicked", data: "somethingElse" }, (response) => {
//         if (response) {
//             // do cool things with the response
//             // ...
//         }
//     })
// })