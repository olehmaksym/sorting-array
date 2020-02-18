const d = require('./data.json');

const filter3 = () => {
  const sortedArr = {};

  d.forEach(item => {
    Array.isArray(sortedArr[item.category])
      ? sortedArr[item.category].push(item)
      : sortedArr[item.category] = [item];
  });

  return sortedArr;
}

console.time('filter3');
filter3();
console.timeEnd('filter3');