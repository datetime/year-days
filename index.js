'use strict';
var leapYear = require('leap-year');

module.exports = function (year) {
	return leapYear(year) ? 366 : 365;
};
