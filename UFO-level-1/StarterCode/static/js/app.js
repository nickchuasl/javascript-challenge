// from data.js
var tableData = data;


// YOUR CODE HERE!
// Get a reference to the table body
// var tbody = d3.select("tbody");


// data.forEach(function(tableData) {
//   console.log(tableData);
//   var row = tbody.append("tr");
//   Object.entries(tableData).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// TESTING

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

var inputField = d3.select("#datetime")

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

var tbody = d3.select("tbody");


// Complete the event handler function for the form
function runEnter() {
  
  // Clear anything in the table
  tbody.html("");
  
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#cityInput");
  var inputState = d3.select("#stateInput");
  var inputCountry = d3.select("#countryInput");
  var inputShape = d3.select("#shapeInput");

  // Get the value property of the input element
  var DateValue = inputDate.property("value");
  var CityValue = inputCity.property("value");
  var StateValue = inputState.property("value");
  var CountryValue = inputCountry.property("value");
  var ShapeValue = inputShape.property("value");



// TESTING
// var filteredRoster = roster.filter((player) => {
  
//   // By default set the match to false
//   var matchesName = false;
//   var matchesPosition = false;

//   // If user has entered a value to the name field, check if it is included in the name of the player
//   if (nameFilterValue != '' && player.name.toLowerCase().includes(nameFilterValue)) {
//       matchesName = true;
//   }

//   // If the user didn't enter anything in the name field, we will set match to true by default
//   if (nameFilterValue == '') {
//       matchesName = true;
//   }

//   if (positionFilterValue != '' && player.position.toLowerCase().includes(positionFilterValue)) {
//       matchesPosition = true;
//   }

//   if (positionFilterValue == '') {
//       matchesPosition = true;
//   }

//   // Will return true if BOTH position and name match
//   return matchesName && matchesPosition;

// });

//TESTING 

  
  var filteredData = tableData.filter((input) => {
    
    // By default set the match to false
    var matchesDate = false;
    // var matchesCity = false;
    // var matchesState = false;
    // var matchesCountry = false;
    // var matchesShape = false;

    // If user has entered a value to the name field, check if it is included in the name of the player
  if (DateValue != '' && input.datetime === DateValue) {
    matchesDate = true;
    }

    // If the user didn't enter anything in the name field, we will set match to true by default
  if (DateValue == '') {
    matchesName = true;
  }

  return matchesDate 

  });

  //TESTING
 


  filteredData.forEach(function(filteredData) {
    console.log(filteredData);
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  runEnter();


  // console.log(filteredData); };

  // inputField.on("change", function() {
  //   const tbody = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];
  //   tbody.innerHTML = "";
  // });

// const key = 'shape';

// const arrayUniqueByKey = [...new Map(tableData.map(item =>
//   [item[key], item])).values()];

// console.log(arrayUniqueByKey);


// console.log(tableData.map(item => item.shape).filter((value, index, self) => self.indexOf(value) === index));


  // Class

// event "keyup"




 // function renderTable() {
// Read the filter values

//~~Filter out anything not matching the filter
//~~ .property("value") is to read the user input

//~~ Create variable for filtered data 
//~~filter function will take out element that is false and will only keep those that are true
//~~ What happens if the input is empty
// if(nameInput === "" && positionInput === "" ) {
//  return true;
//}

//Display the data

  }