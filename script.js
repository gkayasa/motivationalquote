// Array of motivational quotes with authors
const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { quote: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine" },
    { quote: "Go confidently in the direction of your dreams! Live the life you've imagined.", author: "Henry David Thoreau" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { quote: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
    { quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
    { quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison" },
    { quote: "To be the best, you must be able to handle the worst.", author: "Wilson Kanadi" },
    { quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.", author: "Ayn Rand" },
    { quote: "Do not wait for a leader; do it alone, person to person.", author: "Mother Teresa" },
    { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
    { quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { quote: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { quote: "The starting point of all achievement is desire.", author: "Napoleon Hill" },
    { quote: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
    { quote: "The best way to appreciate your job is to imagine yourself without one.", author: "Oscar Wilde" },
    { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
    { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.", author: "John Milton" },
    { quote: "The best way out is always through.", author: "Robert Frost" },
    { quote: "We can't help everyone, but everyone can help someone.", author: "Ronald Reagan" },
    { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle Onassis" },
    { quote: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.", author: "Joel Brown" },
    { quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { quote: "The greater the artist, the greater the doubt. Perfect confidence is granted to the less talented as a consolation prize.", author: "Robert Hughes" },
    { quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { quote: "If I have seen further than others, it is by standing upon the shoulders of giants.", author: "Isaac Newton" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
];

// Get references to HTML elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');

// Function to generate a random quote
function generateRandomQuote() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Get the random quote object
    const randomQuote = quotes[randomIndex];
    // Update the text content of the quote and author elements
    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
}

// Add event listener to the button
newQuoteBtn.addEventListener('click', generateRandomQuote);

// Generate an initial quote when the page loads
document.addEventListener('DOMContentLoaded', generateRandomQuote);