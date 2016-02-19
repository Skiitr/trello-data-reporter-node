// Trello Data Reporter for an exported board in JSON using Node.js
// by Dan Gallagher

// Require file system in node, read in the input file, and parse the JSON
var fs = require('fs')
var content = fs.readFileSync(process.argv[2])
var jsonData = JSON.parse(content)
// Require moment.js for date manipulation
var moment = require('moment')
moment().format('DD-MM-YYYY')
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
var weekDates = ['a day ago', '2 days ago', '3 days ago', '4 days ago', '5 days ago', '6 days ago', '7 days ago']
var monthDates = ['a day ago', '2 days ago', '3 days ago', '4 days ago', '5 days ago', '6 days ago', '7 days ago',
                 '8 days ago', '9 days ago', '10 days ago', '11 days ago', '12 days ago', '13 days ago', '14 days ago',
                 '15 days ago', '16 days ago', '17 days ago', '18 days ago', '19 days ago', '20 days ago', '21 days ago',
                 '22 days ago', '23 days ago', '24 days ago', '25 days ago', '26 days ago', '27 days ago', '28 days ago',
                 '29 days ago', '30 days ago', '31 days ago']
for (var y = 0; y < jsonData.cards.length; y++) {
  if (jsonData.cards[y].closed === true) {
    var date = moment(jsonData.cards[y].dateLastActivity)
    if (date.from(currentTime) === 'a month ago') { lastMonth++ }
    if (weekDates.indexOf(date.from(currentTime)) !== -1) { oneWeek++ }
    if (monthDates.indexOf(date.from(currentTime)) !== -1) { oneMonth++ }
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
