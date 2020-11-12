'use strict';
// Egy átlagos Green Fox hallgató 6 órát kódol naponta
// Egy félév hosszúsága 17 hét
//coding-hours//
const studentPerDay = 6;
const semesterPerWeek = 17;
const weeklyWorkingHours = 52;
console.log("It encodes only on weekdays" , 5 * studentPerDay * semesterPerWeek , "h");
console.log("Spends for coding: ", Math.round((5 * studentPerDay * semesterPerWeek) /  (weeklyWorkingHours * semesterPerWeek) *100 ) , "%");