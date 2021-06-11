

//DATE
function myCalendar () {
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
}
setInterval(myCalendar, 1000)
myCalendar();


//TIME
function myClock() {
let t = new Date();
let hr = t.getHours();
let hour = hr => {
    if (hr > 12){
        return hr - 12
        } else if( hr === 0){
            return 12
        } else {
            return hr
        }
       }
let min = t.getMinutes();
let minute = min => {return min < 10 ? '0' + min : min}
let sec = t.getSeconds();
let second = sec => {return sec < 10 ? '0' + sec : sec}
let zero = () =>{
    return hour(hr) < 10 ? '0' : '';
}
let amPm = hr => hr > 11 ? 'PM' : 'AM'
    
let clock = document.getElementById("clock")
clock.textContent = `${zero()}${hour(hr)}:${minute(min)}:${second(sec)}  ${amPm(hr)}`; 
}

setInterval(myClock, 1000)
myClock();

