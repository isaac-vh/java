/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let counter = document.getElementById('counter');
    let input = document.getElementById('pass-one');
    input.addEventListener('input', function () {


        if (input.value.length > 10) {

            input.value = input.value.slice(0,10);
        }

        counter.innerText = input.value.length + "/10";

    });

})();