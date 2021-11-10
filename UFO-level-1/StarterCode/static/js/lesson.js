var roster = [{
    name: "Doug",
    position: "Quarterback",
    madeTeam: true
},
{
    name: "Antonio",
    position: "Tight End",
    madeTeam: true
},
{
    name: "Nick",
    position: "Kicker",
    madeTeam: false
},
{
    name: "Ereck",
    position: "Offensive Live",
    madeTeam: false
},
{
    name: "Doug",
    position: "Kicker",
    madeTeam: false
},
{
    name: "AJ",
    position: "Line Backer",
    madeTeam: true
}];

// Saving references to our html elements
var tbody = d3.select("tbody");
var filterButton = d3.select("#filter");
var nameInput = d3.select("#nameInput");
var positionInput = d3.select("#positionInput");

function renderTable() {
    // Clear anything in the table
    tbody.html("");

    console.log("filter button clicked");

    // Read the filter values, transform to lowercase to keep everything consistent
    var nameFilterValue = nameInput.property("value").toLowerCase();
    var positionFilterValue = positionInput.property("value").toLowerCase();

    console.log({ nameFilterValue, positionFilterValue });

    //Filter out anything not matching the filter
    var filteredRoster = roster.filter((player) => {

        // By default set the match to false
        var matchesName = false;
        var matchesPosition = false;

        // If user has entered a value to the name field, check if it is included in the name of the player
        if (nameFilterValue != '' && player.name.toLowerCase().includes(nameFilterValue)) {
            matchesName = true;
        }

        // If the user didn't enter anything in the name field, we will set match to true by default
        if (nameFilterValue == '') {
            matchesName = true;
        }

        if (positionFilterValue != '' && player.position.toLowerCase().includes(positionFilterValue)) {
            matchesPosition = true;
        }

        if (positionFilterValue == '') {
            matchesPosition = true;
        }

        // Will return true if BOTH position and name match
        return matchesName && matchesPosition;

    });

    // Print out the array of filtered players
    console.log(filteredRoster);

    // Display the filtered players
    filteredRoster.forEach((player) => {
        var row = tbody.append("tr");

        // If the player has made the team, we will colour the row green with the table-success class
        if (player.madeTeam) {
            row.attr("class", "table-success")
        }

        // Iterate through the object and add the values to the table
        Object.entries(player).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })
}



// The below function will only check for exact matches in the name and position properties

function renderTable() {
    // Clear anything in the table
    tbody.html("");

    console.log("filter button clicked");
    // Read the filter values
    var nameFilterValue = nameInput.property("value").toLowerCase();
    var positionFilterValue = positionInput.property("value").toLowerCase();

    console.log({ nameFilterValue, positionFilterValue });

    //Filter out anything not matching the filter
    var filteredRoster = roster.filter((player) => {

        var matchesName = false;
        var matchesPosition = false;

        if (nameFilterValue != '' && nameFilterValue === player.name.toLowerCase()) {
            matchesName = true;
        }

        if (nameFilterValue == '') {
            matchesName = true;
        }

        if (positionFilterValue != '' && positionFilterValue === player.position.toLowerCase()) {
            matchesPosition = true;
        }

        if (positionFilterValue == '') {
            matchesPosition = true;
        }

        return matchesName && matchesPosition;

    });

    // Display data
    filteredRoster.forEach((player) => {
        var row = tbody.append("tr");
        Object.entries(player).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })
}


renderTable();

// Enable this line to run the filter when the filter button is clicked
// filterButton.on("click", renderTable);

// Attach the function to the keyup event so that it runs everytime we press a key
nameInput.on("keyup", renderTable);
positionInput.on("keyup", renderTable);