// Exploratory JS 

// Test if on page to enable extension
// Consider also using url test

document.querySelectorAll('.bibDisplayItemsMain').length > 0 

// To access bib item locations

document.querySelectorAll('.bibItemsEntry')[4].cells[0].innerText


// print locations with for each

document.querySelectorAll('.bibItemsEntry').forEach((element)=>{console.log(element.cells[0].innerText.split("-")[0])})