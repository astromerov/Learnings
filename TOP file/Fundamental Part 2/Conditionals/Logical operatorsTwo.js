/*

If you want to nest conditonals together without using the if...else statement over again.
You can use the logical operators || OR, && AND, != NOT

*/


if (choice === "sunny" && temperature < 18) {
    para.context = `Its ${temperature} degrees outside`
} else if (choice === "rainy" && temperature > 18) {
    para.context = `Its ${temperature} degrees outside`
}


// Real example


const select = document.querySelector('select');
const deselect = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const weather = "awesome weather"
    const choice = select.value;

    switch(choice) {
        case "sunny":
            para.context = `its ${weather} in here`
            break;
        case "rainy":
            para.context = `ts ${weather} in here`
    } 
}

// the block of code keeps repeating here







