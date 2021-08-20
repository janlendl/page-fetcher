const request = require('request');
const fs = require('fs');

const requestURL = process.argv.slice(2);
const urlPath = requestURL[0];
const fileToSave = requestURL[1];


request(urlPath, (error, response, body) => {
  if(error || response.statusCode !== 200) {
    console.log(`Error ${response.statusCode}, please check again!`);
    return;
  }
  if (!fileToSave.includes('.html')) {
    console.log(`${fileToSave} is an invalid file path. Please check again.`);
    return;
  }
  fs.writeFile(fileToSave, body, (error, stats) => {
    if (!error) {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${fileToSave}`);
    }
  }); 
});


