var student = {
  firstName: 'Louisa',
  lastName: 'Whitaker',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
console.log('value of student.livesInIrvine:', student.livesInIrvine);
student.previousOccupation = 'Political Consultant';

console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Ford',
  model: 'Focus',
  year: 2017
};
vehicle['color'] = 'white';
console.log('value of vehicle["color"]:', vehicle['color']);
vehicle['isConvertible'] = false;

console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Blitzen',
  type: 'German Short Hair pointer'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
