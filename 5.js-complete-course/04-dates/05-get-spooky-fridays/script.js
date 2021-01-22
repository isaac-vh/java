/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        //Providing empty listing.

        let listing = '';

        //For loop runs through every 13th of every month of a given year.

        for (let i = 0; i < 12; i++) {

            let d = new Date(document.getElementById("year").value, i, 13);

            //Provide fully written months instead of just number.

            let m = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];

            let month = m[d.getMonth()];

            //If 13th coincides with friday (5) add month to listing.
            //friday = 5 because [sunday, monday, tuesday, wednesday, thursday, friday, saturday]


            if (d.getDay() === 5) listing += month + '\n';

        }

        alert(listing)

    })

})();