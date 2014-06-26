# year-days [![Build Status](https://travis-ci.org/sindresorhus/year-days.svg?branch=master)](https://travis-ci.org/sindresorhus/year-days)

> Get the number of days in a year


## Install

```sh
$ npm install --save year-days
```


## Usage

```js
var yearDays = require('year-days');

yearDays(2014);
//=> 365

yearDays(2016);
//=> 366
```


## API

### yearDays([year])

#### year

Type: `number`  
Default: current year

### yearDays([date])

#### date

Type: `date`  
Default: `new Date()`


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
