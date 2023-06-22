import React, { useEffect, useState } from 'react';
import './App.css';
import twittericon from './icons8-twitter.svg';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getRandomQuote();
  }, []);

  function getRandomQuote() {
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#FFA500', '#BDBB99', '#77B1A9', '#73A857'];
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });

    var color = Math.floor(Math.random() * colors.length);

    document.querySelector('.quote').style.opacity = 0;
    document.querySelector('.author').style.opacity = 0;

    setTimeout(() => {
      document.querySelector('.quote').style.transition = 'opacity 1s';
      document.querySelector('.quote').style.opacity = 1;
      document.querySelector('.author').style.transition = 'opacity 1s';
      document.querySelector('.author').style.opacity = 1;
    }, 200);
    document.body.style.transition = 'background-color 1s, color 1s';
    document.body.style.backgroundColor = colors[color];
    document.querySelector('.qbtn').style.transition = 'background-color 1s';
    document.querySelector('.qbtn').style.backgroundColor = colors[color];
    document.querySelector('.timg').style.transition = 'background-color 1s';
    document.querySelector('.timg').style.backgroundColor = colors[color];
    document.querySelector('.quote').style.transition = 'color 1s';
    document.querySelector('.quote').style.color = colors[color];
    document.querySelector('.author').style.transition = 'color 1s';
    document.querySelector('.author').style.color = colors[color];
    document.querySelector('.dash').style.transition = 'color 1s';
    document.querySelector('.dash').style.color = colors[color];
  }

  return (
    <div className='box'>
      <div id='quote-box'>
        <div className='quote' id='text'>
          {quote}
        </div>
        <div className='author' id='author'>
          <span className='dash'>-</span>
          {author}
        </div>
        <div className='buttons'>
        <a href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(quote)}" - ${encodeURIComponent(author)}`} id='tweet-quote' target='_blank'>
            <span>
              <img className='timg' src={twittericon} alt='' />
            </span>
          </a>
          <button className='qbtn' id='new-quote' onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

