import React, { useState } from 'react'
import { Button, Navbar, Nav, Collapse, NavbarText }  from 'reactstrap';


function FooterPage(){

const quotes = [
  "This is the code you’re looking for.",
  "Give a man a program, and you’ll frustrate him for a day. Teach a man to program, and you frustrate him for life.",
  "A misspelled variable will make your day terrible.",
  "A machine learning algorithm would jump off a cliff if everyone else was doing it.",
  "A few hours of trial and error can save precious minutes of looking at the README.",
  "If you don’t have time to do it right, you’ll make time to do it twice.",
  "Sometimes, the best debugger is a good night’s sleep.",
  "The best part of being a dev is the ability to work anywhere, anytime. The worst part of being a dev is also the ability to work anywhere, anytime.",
  "Debugger? I hardly know her!",
  "Yes, I’m asking if you’re a robot. I, too, am a robot.",
  "You're closer to becoming a millionaire than Jeff Bezos. Congrats!",
  "Your snippets are safe with us.",
  "It’s not a bug – it’s an undocumented feature.",
  "0110001001101111011011110110001001110011",
  "Documentation? We don’t need no stinking documentation!",
  "Things aren’t always #000000 and #FFFFFF",
  "If at first you don’t succeed; call it version 1.0",
  "Mitch, if you're reading this, give John a raise.",
  "Hi Class! It's me, Zoo Loop from Activity 18, Week 3. Never forget your roots. Giraffe.",
  "One man’s crappy software is another man’s full-time job.",
  "Software and cathedrals are much the same — first we build them, then we pray.",
  "Remember that there is no code faster than no code.",
  "Don't push your luck; just push the code.",
  "In case of fire: 1. git commit 2. git push 3. leave the building",
  "A user interface is like a joke, if you have to explain it.. then is not that good",
  "3 SQL Database walked into a NoSQL bar. A little while later.. they walked out because they could not find a table",
  "Roses are Red, Violets are Blue Unexpected '{' on line 32",
  "20% of US bandwidth is used by Netflix. The rest is used by npm install"
];

var randomNumber = Math.floor(Math.random() * quotes.length);
var newQuote = quotes[randomNumber];
const [Joke, setJoke] = useState(newQuote)
function setJokeFunction() {
  randomNumber = Math.floor(Math.random() * quotes.length);
  newQuote = quotes[randomNumber];
  setJoke(newQuote);
}
    return(
  <Navbar fixed="bottom" className="py-0" dark color="dark">
    <NavbarText>QuikCode Say:<div></div>"<em>{Joke}</em>"</NavbarText>
    <div className = "justify-content-end">
        <Nav>
        <Button color="primary" onClick={setJokeFunction} className="mr-4">Hit Me Again</Button>
      <NavbarText>© {new Date().getFullYear()}</NavbarText>
      </Nav>
    </div>
  </Navbar>)
}
export default FooterPage;