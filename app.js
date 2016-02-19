// Trello Data Reporter for an exported board in JSON using Node.js
// by Dan Gallagher

// Require file system in node, read in the input file, and parse the JSON
var fs = require('fs')
var content = fs.readFileSync(process.argv[2])
var jsonData = JSON.parse(content)
// Require moment.js for date manipulation
var moment = require('moment')
moment().format('DD-MM-YYYY')

// Set the current time
var currentTime = moment()

// Count the cards/issues that are closed
var closedCards = 0
for (var i = 0; i < jsonData.cards.length; i++) {
  if (jsonData.cards[i].closed === true) { closedCards++ }
}

// Count the lists that are closed
var closedLists = 0
for (var z = 0; z < jsonData.lists.length; z++) {
  if (jsonData.lists[z].closed === true) { closedLists++ }
}

// Collect data on the date of each closed card
var lastMonth = 0
var oneMonth = 0
var oneWeek = 0
for (var y = 0; y < jsonData.cards.length; y++) {
  if (jsonData.cards[y].closed === true) {
    var cardDate = moment(jsonData.cards[y].dateLastActivity)
    if (cardDate.from(currentTime) === 'a month ago') { lastMonth++ }
    if (currentTime.diff(cardDate, 'days') < 7) { oneWeek++ }
    if (currentTime.diff(cardDate, 'days') < 30) { oneMonth++ }
  }
}

// Print opening of report
console.log('------------------------------\n')

// Print the total number of cards/issues
console.log('This board contains ' + jsonData.cards.length + ' cards:')

// Print the number of closed cards/issues
console.log(closedCards + ' are closed,')

// Print the number of cards closed in the last week
console.log(oneWeek + ' cards closed in the past week,')

// Print the number of clards closed in the last month
console.log(oneMonth + ' cards closed in the past month,')

// Print the number of clards closed last month
console.log(lastMonth + ' cards closed the previous month,')

// Print the number of closed cards/issues
console.log(jsonData.cards.length - closedCards + ' remain open.\n')

// Print the total number of lists
console.log('This board contains ' + jsonData.lists.length + ' lists:')

// Print the number of closed lists
console.log(closedLists + ' are closed,')

// Print the number of closed lists
console.log(jsonData.lists.length - closedLists + ' remain open.')

// Print closing of report
console.log('\n------------------------------')
