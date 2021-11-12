// from data.js
var tableData = data;

// Saving references to our html elements
var inputDate = d3.select("#datetime");
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

// Clear anything in the table
  tbody.html("");
  
// Read user input and save it as variable
  var DateValue = inputDate.property("value");

// If a user has entered a value in the field this will filter our data based on user input
  var filteredData = tableData.filter((userinput) => {

  // By default set the match to false
    var matchesDate = false;
  
    // If a user has entered a value into this field ensure that it match our dataset
    if (DateValue != "" && userinput.datetime === DateValue) {
      matchesDate = true;
      }
      
    // If the user didn't enter anything in this field, we will set match to true by default
    if (DateValue == "") {
        matchesDate = true;
    }
    // Will return true if all fields are matched or is true
    return matchesDate; 

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
