function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var results = convertMinutesToSeconds(5);

console.log('~ results', results);

function greet(name) {

  var greeting = 'Hey, ' + name;

  return greeting;
}

var resultGreeting = greet('Beavis');

console.log('~ resultGreeting', resultGreeting);

function getArea(width, height) {
  var area = width * height;
  return area;

}

var getAreaResult = getArea(17, 42);

console.log('~ getAreaResult', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('~ getFirstNameResult', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('~ getLastElementResult', getLastElementResult);
