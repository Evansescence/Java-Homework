// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);
data.forEach(function(weatherReport) {
    console.log(weatherReport);
    data.forEach((weatherReport) => {
        var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
});
// Assign the data from `data.js` to a descriptive variable
var date_incident = data;

// Select the submit button
var Filter_table = d3.select("#filter-btn");

Filter_table.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("table-head");

  console.log(inputValue);
  console.log(date_incident);

  var filteredData = date_incident.filter(enter_date => enter_date.datetime === inputValue);

  console.log(filteredData);

});