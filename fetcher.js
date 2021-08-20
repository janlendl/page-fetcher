const request = require('request');
const fs = require('fs');


const requestURL = process.argv.slice(2);
request(requestURL[0], (error, response, body) => {
  fs.writeFile(requestURL[1], body, (error, stats) => {
    if (!error) {
        console.log(`Downloaded and saved ${body.length} bytes to ${requestURL[1]}`);
    }
  });
});


