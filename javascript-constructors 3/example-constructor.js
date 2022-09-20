function ExampleConstructor() {}
console.log('~ ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('~ ExampleConstructor type of prototype:', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('~ newConstructor value', newConstructor);
console.log('~ newConstructor instance of ExampleConstructor:', newConstructor instanceof ExampleConstructor);
