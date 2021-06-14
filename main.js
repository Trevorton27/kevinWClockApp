//TIME
function renderClock() {
  const theTime = new Date();
  const second = addLeadingZero(theTime.getSeconds());
  const minute = addLeadingZero(theTime.getMinutes());
  const hour = theTime.getHours();
  const isAm = hour < 12 || hour === 0;
  let amPm = isAm ? 'AM' : 'PM';

  const clock = document.getElementById('clock');
  clock.textContent = `${formatHour(hour)}:${minute}:${second} ${amPm}`;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}
function renderDate() {
  const theDate = new Date();
  const day = days[theDate.getDay()];
  const month = months[theDate.getMonth()];
  const date = theDate.getDate();
  const year = theDate.getFullYear();

  const calendar = document.getElementById('calendar');
  calendar.textContent = `${day}, ${month} ${formatDateSuffix(date)} ${year}`;
}

function formatDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

setInterval(() => {
  renderClock();
  renderDate();
}, 1000);
renderClock();
renderDate();
