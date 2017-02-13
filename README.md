# URL-Shortener

Shorten URLs to a length specified, randomly generated, URL.

## Installation

###Required Dependencies

`"body-parser": "^1.16.0"
"express": "^4.14.1"
"mysql": "^2.13.0"
"sequelize": "^3.30.1"
"dotenv": "^4.0.0"
"eslint": "^3.15.0"
"eslint-config-airbnb": "^14.1.0"
"eslint-plugin-import": "^2.2.0"
"eslint-plugin-jsx-a11y": "^4.0.0"
"eslint-plugin-react": "^6.9.0"`

All are provided in package.json and can be installed via:
`npm install`  

## API

Start your server using `node src/server.js`

### Entry Point

The entry point to URL-Shortener is at `/api/v1/url`

Using POST and JSON for input:

`{
  "origin": "linkToBeShortened"
}`

### End Point

The output will be in JSON:
`{
  "origin": "linkToBeShortened",
  "new": "shortenedLink"
}`
