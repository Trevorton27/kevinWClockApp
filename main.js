let d = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = days[d.getDay()];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month = months[d.getMonth()];
let date = d.getDate();
let suffix = date => {
    if (date == 1 || date == 21 || date == 31) {
        return "st";
    }
    else if (date == 2 || date == 22) {
        return "nd";
    }
    else if (date == 3 || date == 23) {
        return "rd";
    }
    else {
        return "th";
    }
};
let year = d.getFullYear();

let calendar = document.getElementById("calendar")
calendar.textContent = `${day}, ${month}  ${date}${suffix(date)}  ${year}`;


let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();

let clock = document.getElementById("clock")
clock.textContent = `${hour}:${minute}:${second}`;

//day month date year  (eg. Monday, August 12th 2021)
// HOURS:MINUTES:SECONDS (eg. 03:30:09)