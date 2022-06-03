// Star Rating Code...

const StartScore = (rate) => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(5);
console.log(start);

// Generate Random Id:

const RandomId = (len) => Math.random().toString(36).substr(3, len);
const id = RandomId(10);
console.log(id);

const OddEven = (num) => (!!(num & 1) ? "odd" : "even");
const num = OddEven(2);
console.log(num);
