/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes =[{
  quote:'Just keep swimming',
  soure:'-Finding Nemo',
  citation:'-dory',
  year:'2003'

},{
  quote:"Frankly, my dear, I don't give a damn",
  soure:'-Gone With the Wind',
  year:'1939'

},{
  quote:'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams',
  soure:'- Dr. Suess'
  
},{
  quote:'E.T. phone home.',
  soure:' - E.T. The Extra-Terrestrial',
  citation:'E.T.'

},{
  quote:'Why so serious?',
  soure:' - The Dark Knight',
  citation:'-the joker',
  year:'2008'

},{
  quote:'May the Force be with you.',
  soure:'-Star Wars',
  citation:'han solo',
  year:'1977'
}];


/***
 * `getRandomQuote` function
***/
function getRandomQuote( array ) {
  var randomNum = Math.floor( Math.random() * quotes.length);
  var randomQuote = quotes[randomNum]; 
  
  return array;
}


/***
 * `printQuote` function
***/
function printQuote(innerHTML) {
  var randomQuote = getRandomQuote( quotes );

  var htmlString = `<p class = "quotes">${randomQuote.quote}</p>`;
      htmlString += `<p class = "source">${randomQuote.soure}`;

  if ( randomQuote.citation ) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  };

  if ( randomQuote.year ) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  };
      htmlString += `</p>`;
  

 document.getElementById('qute-box').innerHTML = htmlString

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);