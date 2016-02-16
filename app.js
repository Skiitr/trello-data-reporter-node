// Trello Data Reporter for an exported board in JSON using Node.js
// by Dan Gallagher

// Require file system in node, read in the input file, and parse the JSON
var fs = require('fs')
var content = fs.readFileSync(process.argv[2])
var jsonData = JSON.parse(content)

// Count the cards/issues that are closed
var closedCards = 0
for (var i = 0; i < jsonData.cards.length; i++) {
  if (jsonData.cards[i].closed === true) { closedCards++ }
}

// Print the total number of cards/issues
console.log('This board contains ' + jsonData.cards.length + ' cards:')

// Print the number of closed cards/issues
console.log(closedCards + ' are closed,')

// Print the number of closed cards/issues
console.log(jsonData.cards.length - closedCards + ' are open.')
