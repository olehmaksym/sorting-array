const d = require('./data.json');

const filter2 = () => d.reduce((acum, item) => {
  acum[item.category] = Array.isArray(acum[item.category])
    ? [...acum[item.category], item]
    : [item];
  return acum;
}, {});

console.time('filter2');
filter2();
console.timeEnd('filter2')