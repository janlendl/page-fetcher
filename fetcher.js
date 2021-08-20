const request = require('request');
const fs = require('fs');

const requestURL = process.argv.slice(2);
const filePath = requestURL[0];
const writeToLocation = requestURL[1];


request(filePath, (error, response, body) => {
  if(error || response.statusCode !== 200) {
    console.log(`Error ${response.statusCode}, please check again!`);
    return;
  }
  if (!writeToLocation.includes('.html')) {
    console.log(`${writeToLocation} is an invalid file path. Please check again.`);
    return;
  }
  fs.writeFile(writeToLocation, body, (error, stats) => {
    if (!error) {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${writeToLocation}`);
    }
  }); 
});


