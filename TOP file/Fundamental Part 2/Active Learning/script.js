/*

We need you to write a conditional statement inside the onchange handler function, just below the // ADD CONDITIONAL HERE comment. It should:

Look at the selected month (stored in the choice variable. This will be the <select> element value after the value changes, so "January" for example.)
Set a variable called days to be equal to the number of days in the selected month. To do this you'll have to look up the number of days in each month of the year. You can ignore leap years for the purposes of this example.
Hints:

You are advised to use logical OR to group multiple months together into a single condition; many of them share the same number of days.
Think about which number of days is the most common, and use that as a default value.

*/

function onChange () {
    let days = 31;

    if(choice === "January") {
        return "its January month"
    } else if (choice === "March" || choice === "July" || choice === "October") {
        return `there are ${days} days in your chosen month `
    }
}   




















