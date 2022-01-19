export async function mungedDate(date) {
  let newDate = date;
  let splitDate = newDate.split('-'); // ex: ['2022', '11', '03']
  let d = Number(splitDate.reverse()[0]); // ex: ['01', '10', '1988']
  let m = Number(splitDate.reverse()[1]); // ex: ['01', '10', '1988']
  let y = Number(splitDate.reverse()[2]); // ex: ['01', '10', '1988']

  // setHoliday(await getHolidays(y, m, d));
  // setHoroscope(await getHoroscope(y, m, d));
  return [d, m, y];
}
