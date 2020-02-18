const json = require('./data.json');

const keySort = (arr, key, reverse = false) =>
  arr.sort((prev, next) => {
    return reverse ? next[key] - prev[key] : prev[key] - next[key];
  });

console.time("sort");

keySort(json, "category");

console.timeEnd("sort");

// Author: https://github.com/Tusko