// create variable to represent data defined in data.js
var tableData = data;
var tbody = d3.select("tbody");

// function to append table with rows of data from data.js
d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td>
    <td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });

// Function to return just the new data you want in the table
function newRequest() {
    // Getting a reference to the input element on the page with the id property set to 'input-field'
    var inputDate = d3.select("#datetime").property("value");
    console.log("newRequest function was called)");
    var filterData = tableData.filter(x => x.datetime === inputDate)
    // remove current rows in table
    d3.selectAll("tr").remove();

    console.log(filterData);

    filterData.forEach(y => {
        var row = tbody.append("tr");
        Object.entries(y).forEach(([key, value]) => {
            row.append("td").text(value);
        });
    });


    }

