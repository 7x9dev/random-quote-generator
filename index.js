const button = document.querySelector("#btn");
const quote = document.querySelector("#quote");

const quotes = [
   "Opportunities don't happen, you create them.",
   "The best preparation for tomorrow is doing your best today.",
   "It's hard to beat a person who never gives up.",
   "Happiness is not something ready made. It comes from your own actions.",
   "Magic is believing in yourself. If you can make that happen, you can make anything happen.",
   "Hold the vision, trust the process.",
   "Don't be afraid to give up the good to go for the great.",
   "One day or day one. You decide.",
   "Great things are done by a series of small things brought together.",
   "The hard days are what make you stronger.",
];

button.addEventListener("click", () => {
   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
   quote.textContent = randomQuote;
});
