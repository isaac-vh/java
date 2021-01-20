/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let age=prompt("What is your age")
let gender=prompt("what is your gender")
let town=prompt("what is your town")

confirm(age+'/n'+gender+'/n'+town)
let positive
do {
    let age=prompt("What is your age")
    let gender=prompt("what is your gender")
    let town=prompt("what is your town")

    let positive=confirm(age+'/n'+gender+'/n'+town)
}
while (positive===false)