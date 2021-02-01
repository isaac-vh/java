/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

    // Find a <table> element with id="myTable":
    let table = document.getElementById("Target");

// Create an empty <tr> element and add it to the 1st position of the table:
    let row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

// Add some text to the new cells:
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";

})();
