console.log('Lodash is loaded:', typeof _ !== 'undefined');
// create collection of players

var player1 = {
  name: 'Jay',
  hand: []
};

var player2 = {
  name: 'Allen',
  hand: []
};

var player3 = {
  name: 'Lucy',
  hand: []
};

var player4 = {
  name: 'Max',
  hand: []
}
;
// create 52card deck
var card52 = [{
  Ace: 11,
  King: 10,
  Queen: 10,
  Jack: 10,
  Ten: 10,
  Nine: 9,
  Eight: 8,
  Seven: 7,
  Six: 6,
  Five: 5,
  Four: 4,
  Three: 3,
  Two: 2
}];
// get all the keys out of the deck with a 4 of loop
for (var keys of card52) {
  // shuffle those keys
  var shuffled = _.shuffle(keys);
  // create a new array with chunks of 2

  var playCards = _.chunk(shuffled, 2);
  // push the constantly shuffled cards into each players hand
  player1.hand.push(playCards[0]);
  player2.hand.push(playCards[1]);
  player3.hand.push(playCards[2]);
  player4.hand.push(playCards[3]);

}
// flatten the array so you can add the index values

var flat1 = _.flatten(player1.hand);
var sum1 = flat1[0] + flat1[1];
var flat2 = _.flatten(player2.hand);
var sum2 = flat2[0] + flat2[1];
var flat3 = _.flatten(player3.hand);
var sum3 = flat3[0] + flat3[1];
var flat4 = _.flatten(player4.hand);
var sum4 = flat4[0] + flat4[1];

// find the max value of the sum and create a conditional to update the new winner
var winner = Math.max(sum4, sum1, sum2, sum3);
if (sum4 === winner) {
  console.log(player4.name + ' at ' + sum4 + ' points wins');
} else if (sum1 === winner) {
  console.log(player3.name + ' at ' + sum3 + ' points wins');
} else if (sum2 === winner) {
  console.log(player2.name + ' at ' + sum2 + ' points wins');
} else {
  console.log(player1.name + ' at ' + sum1 + ' points wins');
}
