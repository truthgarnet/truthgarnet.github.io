const quotes = [
    {
      quote: "Do not pity the dead, Harry. Pity the living, and above all those who live without love.",
      author: "Albus Dumbledore",
    },
    {
      quote: "It is impossible to manufacture or imitate love.",
      author: "Horace Slughorn",
    },
    {
      quote:
        "Love as powerful as your mother's for you leaves it's own mark. To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever.",
      author: "Albus Dumbledore",
    },
    {
      quote: "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
      author: "Albus Dumbledore",
    },
    {
      quote: "I cared more for your happiness than knowing the truth, more for your peace of mind than my plan, more for your life than the lives that might be lost if the plan failed.",
      author: "Albus Dumbledore",
    },
    {
      quote: "Books! And cleverness! There are more important things — friendship and bravery.",
      author: "Hermione Granger",
    },
    {
      quote: "We're with you whatever happens.",
      author: "Ron Weasley",
    },
    {
      quote: "Never go on trips with anyone you do not love.",
      author: "Hemmingway",
    },
    {
      quote: "Every human life is worth the same, and worth saving.",
      author: "Kingsley Shacklebolt",
    },
    {
      quote: "It matters not what someone is born, but what they grow to be.",
      author: "Albus Dumbledore",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;