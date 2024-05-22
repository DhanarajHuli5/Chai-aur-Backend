const symbol = Symbol();
const object = {
  [symbol]: 3
};

console.log(object[symbol]); // 'value'
console.log(typeof(object[symbol]));