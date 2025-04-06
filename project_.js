const quotes = [
    {
      quote: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Success is not in what you have, but who you are.",
      author: "Bo Bennett"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "Everything you can imagine is real.",
      author: "Pablo Picasso"
    }
  ];
  
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");
  const button = document.getElementById("new-quote");
  
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
  
    quoteText.textContent = `"${selectedQuote.quote}"`;
    authorText.textContent = `- ${selectedQuote.author}`;
  });
  