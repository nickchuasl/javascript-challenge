// from data.js
var tableData = data;

// Saving references to our html elements
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#cityInput");
var inputState = d3.select("#stateInput");
var inputCountry = d3.select("#countryInput");
var inputShape = d3.select("#shapeInput");
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Clear anything in the table
  tbody.html("");
  
// Read user input and save it as variable
  var DateValue = inputDate.property("value");
  var cityValue = inputCity.property("value");
  var stateValue = inputState.property("value");
  var countryValue = inputCountry.property("value");
  var shapeValue = inputShape.property("value");  

// If a user has entered a value in the field this will filter our data based on user input
  var filteredData = tableData.filter((userinput) => {

  // By default set the match to false
    var matchesDate = false;
    var matchesCity = false;
    var matchesState = false;
    var matchesCountry = false;
    var matchesShape = false;
  
    // If a user has entered a value into this field ensure that it match our dataset
    if (DateValue != "" && userinput.datetime === DateValue) {
      matchesDate = true;
      }
      
    // If the user didn't enter anything in this field, we will set match to true by default
    if (DateValue == "") {
        matchesDate = true;
    }

    // If a user has entered a value into this field ensure that it match our dataset
    if (cityValue != "" && userinput.city === cityValue) {
        matchesCity = true;
      }

       // If the user didn't enter anything in this field, we will set match to true by default
    if (cityValue == "") {
        matchesCity = true;
    }

    // If a user has entered a value into this field ensure that it match our dataset
    if (stateValue != "" && userinput.state === stateValue) {
      matchesState = true;
    }

    // If the user didn't enter anything in this field, we will set match to true by default
    if (stateValue == "") {
      matchesState = true;
    }

    // If a user has entered a value into this field ensure that it match our dataset
    if (countryValue != "" && userinput.country === countryValue) {
      matchesCountry = true;
    }

    // If the user didn't enter anything in this field, we will set match to true by default
    if (countryValue == "") {
      matchesCountry = true;
    }

    // If a user has entered a value into this field ensure that it match our dataset
    if (shapeValue != "" && userinput.shape === shapeValue) {
      matchesShape = true;
    }

    // If the user didn't enter anything in this field, we will set match to true by default
    if (shapeValue == "") {
      matchesShape = true;
    }

    // Will return true if all fields are matched or is true
    return matchesDate && matchesCity && matchesState && matchesCountry && matchesShape; 

  });
  
  // Display the filtered sitings
  filteredData.forEach(function(filteredData) {
    console.log(filteredData);
    var row = tbody.append("tr");

    // Iterate through the object and add the values to the table
    Object.entries(filteredData).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

runEnter();

// Attach the function to the keyup event so that it runs everytime a key is pressed it auto filters
inputDate.on("keyup", runEnter);
inputCity.on("keyup", runEnter);
inputState.on("keyup", runEnter);
inputCountry.on("keyup", runEnter);
inputShape.on("keyup", runEnter);
