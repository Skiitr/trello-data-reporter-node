###Trello Data Reporter for Node.js###
####by Dan Gallagher####

This node.js application was designed to extract data from an exported Trello .json file. Currently this list of features it displays are as follows:

Shows:
- Total number of cards
- Number of closed cards
- Number of cards closed in the past week
- Number of cards closed in the past month
- Number of cards closed in the previous month
- Number of open cards
- Total number of lists
- Number of closed lists
- Number of open lists

To use this application you must first have an exported Trello board in a JSON format and have Node.js installed. For instructions on either of these two things see Trello and/or Node.js documentation.

Once you have the project files and the exported trello board in a project directory, navagate to that directory and...


Install required npm modules:
```
npm install
```

Run the application:
```
node app.js filename.json
```
