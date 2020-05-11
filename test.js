/*
Not sure what this code does? Don't worry about it for now. Hit the "play"
button below to execute it. It will start a tiny web application running on
your computer that you can use to complete this challenge. The app will run
until you execute another program in the IDE, or quit TwilioQuest.
*/
const http = require('http');

const server = http.createServer((request, response) => {
  response.end('hello world!')
});

const PORT = 8767;
server.listen(PORT, () => { 
  console.log(`HTTP server listnenig on http://localhost:${PORT}/`);
  console.log(`Paste this URL into the hack UI to complete the challenge!`);
  console.log(`you can open this URL in your web browser too to test it out.`)
  
});