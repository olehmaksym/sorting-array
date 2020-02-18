const d = require('./data.json');

const filter4 = () => d.reduce((acum, item) => {
   Array.isArray(acum[item.category])
    ? acum[item.category].push(item)
    : acum[item.category] = [item];

  return acum;
}, {});

console.time('filter4');
filter4();
console.timeEnd('filter4')
