let today = new Date();
let todayYear = Number(today.getFullYear());
let todayMonth = Number(today.getMonth() + 1);
let todayDay = Number(today.getDate());

const dailySeconds = 86400;
const breathsPerSecond = 0.267;
const heartBeatsPerSecond = 1.3;
const blinksPerSecond = 0.225;
//   const monthlySeconds = 2628288;
//   const yearlySeconds = 31536000;

class DateCon {
  constructor(d, m, y) {
    this.d = d;
    this.m = m;
    this.y = y;
  }
}

let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function countLeapYears(d) {
  let years = d.y;

  if (d.m <= 2) {
    years--;
  }
  return (
    Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400)
  );
}

function getDifference(dt1, dt2) {
  let n1 = dt1.y * 365 + dt1.d;

  for (let i = 0; i < dt1.m - 1; i++) {
    n1 += monthDays[i];
  }
  n1 += countLeapYears(dt1);

  let n2 = dt2.y * 365 + dt2.d;
  for (let i = 0; i < dt2.m - 1; i++) {
    n2 += monthDays[i];
  }
  n2 += countLeapYears(dt2);
  return n2 - n1;
}

let dt1 = new DateCon(d, m, y);
let dt2 = new DateCon(todayDay, todayMonth, todayYear);
const totalNumOfDays = getDifference(dt1, dt2);

const newTotalBreaths = Math.floor(
  totalNumOfDays * dailySeconds * breathsPerSecond
);
const totalHeartBeats = totalNumOfDays * dailySeconds * heartBeatsPerSecond;
const totalBlinks = totalNumOfDays * dailySeconds * blinksPerSecond;
const totalDreamDays = Math.ceil((totalNumOfDays * 2) / 24);
const totalYearsAsleep = (totalNumOfDays / 3 / 365).toFixed(2);
const totalExtinct = totalNumOfDays * 150;
