var d = new Date();
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();

let clock = document.getElementById("clock")
clock.textContent = `${hour}:${minute}:${second}`;