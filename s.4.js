const d = require('./data.json');

const filter4 = () => d.reduce((acum, item) => {
  acum[item.category] = Array.isArray(acum[item.category])
    ? acum[item.category].push(item)
    : [item];
  return acum;
});

console.time('filter4');
filter4();
console.timeEnd('filter4')
