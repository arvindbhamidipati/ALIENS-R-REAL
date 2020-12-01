// from data.js
var tableData = data;

//filter button
var button = d3.select("#filter-btn");
var dateInput = d3.select("#datetime").property("value");
//REMOVE
function removeTbody() {
  d3.select("tbody")
    
    .selectAll("td").remove()
    .selectAll("tr").remove();

};

//DISPLAY the sightings data
var tbody = d3.select("tbody");

function tableDisplay(ufoSightings) {
  ufoSightings.forEach((ufoRecord) => {
    //Note -> leave in loop otherwise will print table horizontally
    var k = tbody.append("tr");
    
    Object.entries(ufoRecord).forEach(([key, value]) => {
      
      var v = k.append("td");
      v.html(value);
    
    });
  });
};

console.log(tableData);
tableDisplay(tableData);

button.on("click", function(event) {
  
  d3.event.preventDefault();
 
  deleteTbody();
  

  if (dateInput.trim() === "" ) {
    var filteredData = tableData;
  } else {
    //something needs to happen here
  };

  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
  };

  console.log(filteredData);
  tableDisplay(filteredData);
});