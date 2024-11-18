var quotes = [
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "J.K. Rowling",
    quote: "It does not do to dwell on dreams and forget to live.",
  },
  {
    author: "Sarah Dessen",
    quote:
      "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
  },
  {
    author: "Roy T. Bennett",
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  },
  {
    author: "Roy T. Bennett",
    quote:
      "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
];

// Save to localStorage
localStorage.setItem("Quotes", JSON.stringify(quotes));

// Function to generate a random quote
function generateQuote() {
  //Random index
  var randomIndex = Math.floor(Math.random() * quotes.length);

  // Get the random quote and author
  var randomQuoteAuthor = [
    quotes[randomIndex].quote,
    quotes[randomIndex].author,
  ];

  // Update the HTML elements
  document.getElementById("quote").textContent = `"${randomQuoteAuthor[0]}"`;
  document.getElementById("author").textContent = `--${randomQuoteAuthor[1]}`;
}
