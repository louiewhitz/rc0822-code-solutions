const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evens = numbers.filter(number => number % 2 === 0);
console.log('evens ', evens);

const overFive = numbers.filter(number => number > 5);
console.log('overFive', overFive);

const startsWithE = names.filter(name => name.startsWith('E') === true);
console.log('startsWithE', startsWithE);

const includesD = names.filter(name => name.includes('D') || name.includes('d') === true);
console.log('includesD', includesD);
