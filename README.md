# URL-Shortener

Shorten URLs to a length specified, randomly generated, URL.

## Installation

Express and body-parser are needed to run this application.

Both are provided in package.json and can be installed via:
`npm install`  

## API

Start your sever using `node /filepathToServer.js/`

### Entry Point

The entry point to URL-Shortener is at http://localhost:3000/api/v1/url

Using the JSON format:

`{
  "origin": "linkToShortened"
}`

### End Point

The output will be in the JSON format:
`{
  "Origin": "linkToBeShortened",
  "New": "shortenedLink"
}`
