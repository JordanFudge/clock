// Setting constants for each hand on the clock
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

// Function for setting the clock's time
function setClockTime() {

    // SECONDS

    // Creating a constant for current date and time
    const now = new Date();

    // Getting seconds from now constant, and storing them in another constant
    const seconds = now.getSeconds();

    // Calculating the degrees for each second that the "seconds" hand rotates
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    // Transforming the "seconds" hand with the value from the above constant
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // MINUTES

     // Getting minutes from now constant, and storing them in another constant
    const minutes = now.getMinutes();

    // Calculating the degrees for each minute that the "minutes" hand rotates
    const minutesDegrees = ((minutes / 60) * 360) + 90;

    // Transforming the "minutes" hand with the value from the above constant
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // HOURS

    // Getting hours from now constant, and storing them in another constant
    const hours = now.getHours();

    // Calculating the degrees for each hour that the "hours" hand rotates
    const hoursDegrees = ((hours / 12) * 360) + 90;
    
    // Calculating the degrees for each hour that the "hours" hand rotates
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Setting interval for clock to one second
setInterval(setClockTime, 1000);