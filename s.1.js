const d = require('./data.json');

const filter1 = () => {
  const sortedArr = {};

  d.forEach(item => {
    sortedArr[item.category] = Array.isArray(sortedArr[item.category])
      ? [...sortedArr[item.category], item]
      : [item];
  });

  return sortedArr;
}

console.time('filter1');
filter1();
console.timeEnd('filter1');
