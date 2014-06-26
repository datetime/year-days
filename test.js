'use strict';
var assert = require('assert');
var yearDays = require('./');

it('should get the number of days in a year', function () {
	assert.strictEqual(yearDays(2014), 365);
	assert.strictEqual(yearDays(2016), 366);
	assert.strictEqual(yearDays(new Date(2016, 0)), 366);
	assert(typeof yearDays() === 'number');
});
