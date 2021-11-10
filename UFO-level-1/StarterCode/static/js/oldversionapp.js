// // from data.js
// var tableData = data;


// // YOUR CODE HERE!
// // Get a reference to the table body
// // var tbody = d3.select("tbody");


// // data.forEach(function(tableData) {
// //   console.log(tableData);
// //   var row = tbody.append("tr");
// //   Object.entries(tableData).forEach(function([key, value]) {
// //     console.log(key, value);
// //     // Append a cell to the row for each value
// //     // in the weather report object
// //     var cell = row.append("td");
// //     cell.text(value);
// //   });
// // });

// // TESTING

// // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
// var form = d3.select("#form");

// var inputField = d3.select("#datetime")

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);


// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

//   var filteredData = tableData.filter(dateTime => dateTime.datetime === inputValue);

//   //TESTING
//   var tbody = d3.select("tbody");


//   filteredData.forEach(function(filteredData) {
//     console.log(filteredData);
//     var row = tbody.append("tr");
//     Object.entries(filteredData).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });


//   console.log(filteredData); };

//   inputField.on("change", function() {
//     const tbody = document.getElementById("ufo-table").getElementsByTagName('tbody')[0];
//     tbody.innerHTML = "";
//   });

// // const key = 'shape';

// // const arrayUniqueByKey = [...new Map(tableData.map(item =>
// //   [item[key], item])).values()];

// // console.log(arrayUniqueByKey);

// var arrayUniqueByKey tableData.map(item => item.age).filter((value, index, self) => self.indexOf(value) === index)

//   console.log(arrayUniqueByKey);