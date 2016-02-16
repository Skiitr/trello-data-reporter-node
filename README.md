##Trello Data Reporter##
###by Dan Gallagher###

This application was designed to extract data from an exported Trello .json file. Currently this list of features it displays are as follows:

-Shows the total number of cards
-Shows the number of closed cards
-Shows the number of open cards

To use this application you must first have an exported Trello board in a JSON format and have Node.js installed. For instructions on either of these two things see Trello and/or Node.js documentation.

Once you have that you can run the exported trello board with the app.js file by having both files in the same directory, navagating to that directory and running:

```
node app.js filename.json
```
