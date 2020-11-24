/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
//***an array of objects that are not all the same
var quotes =[{
  quote:'Just keep swimming',
  source:'-Finding Nemo',
  citation:'-dory',
  year:'2003'

},{
  quote:"Frankly, my dear, I don't give a damn",
  soure:'-Gone With the Wind',
  year:'1939'

},{
  quote:'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams',
  source:'- Dr. Suess'
  
},{
  quote:'E.T. phone home.',
  source:' - E.T. The Extra-Terrestrial',
  citation:'E.T.'

},{
  quote:'Why so serious?',
  source:' - The Dark Knight',
  citation:'-the joker',
  year:'2008'

},{
  quote:'May the Force be with you.',
  source:'-Star Wars',
  citation:'han solo',
  year:'1977'
}];


//**this getRandomQuote function will make a random number and add it to one object in the array 
function getRandomQuote() {
  var randomNum = Math.floor( Math.random() * quotes.length);
  var randomQuote = quotes[randomNum]; 
  
  return getRandomQuote;
}


//**this printQuote function will call the getRandomQuote and then add  it to the page
function printQuote() {
  var randomQuote = getRandomQuote();

  var htmlString = `<p class = "quotes">${randomQuote.quote}</p>`;
      htmlString += `<p class = "source">${randomQuote.soure}`;

  if ( randomQuote.citation ) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  };
//if statment to see if there are any citation or year 
  if ( randomQuote.year ) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  };
      htmlString += `</p>`;
  

 document.getElementById('quote-box').innerHTML = htmlString

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
