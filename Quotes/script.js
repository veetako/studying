// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
const quotes = [
  {
    quote: `"Hello there"`,
    person: `John Doe`,
  },
  {
    quote: `"yesyesyes"`,
    person: `Rumble`,
  },
  {
    quote: `"Hello"`,
    person: `Jane Doe`,
  },
  {
    quote: `"there"`,
    person: `who`,
  },
  {
    quote: `"nope"`,
    person: `John`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
