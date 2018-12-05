const a = parseInt(process.argv[3]);
const b = parseInt(process.argv[4]);

if (process.argv[2] === 'add') {
  console.log(a + b);

} else if (process.argv[2] === 'subtract') {
  console.log(a - b);

} else if (process.argv[2] === 'multiply') {
  console.log(a * b);

} else if (process.argv[2] === 'divide') {
  console.log(a / b);

} else if (process.argv[2] === 'remainder') {
  console.log(a % b);

} else if (process.argv[2] === 'exp') {
  console.log(Math.pow(a, b));

} else if (process.argv[2] === 'factorialize') {
  function factorialize(a) {
    if (a < 0)
      return -1;

    else if (a == 0)
      return 1;

    else {
      return (a * factorialize(a - 1));
    }
  }
  console.log(factorialize(a));
} 
else {
  console.log("Try again, foo'!")
}