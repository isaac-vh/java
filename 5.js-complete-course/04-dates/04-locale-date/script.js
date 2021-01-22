/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    // document.getElementById("target").innerHTML = new Date();
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let date = new Date();
    let date1 = date.getDate();
    let month = date.getMonth() - 1;
    let day = date.getDay() - 1;
    let yy = date.getFullYear();
    let year = (yy < 1000) ? yy + 1900 : yy;
    let hour = date.getHours() + "h"+ date.getMinutes();
    document.getElementById("target").innerHTML = "Today is " + days[day] + " "+ date1 + "  " + months[month] + "  " + year + ", " + hour ;





})();