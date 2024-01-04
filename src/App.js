import { useState } from "react";
import getQuotes from "./api/index";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState(
    "At times like this, we must find out who their enemies are. Because the enemy of my enemy is a friend."
  );
  const [author, setAuthor] = useState("Vincenzo Cassano");

  const handleClick = () => {
    getQuotes()
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      })
      .catch((error) => {
        throw new Error(`Error fetching quotes: ${error.message}`);
      });
  };

  return (
    <div className="App">
      <h3 className="App-heading">Quote of the Day</h3>

      <div className="App-content">
        <div className="App-quote-content">
          <i className="fa-solid fa-quote-left"></i>
          <p className="App-quote">{quote}</p>
          <i className="fa-solid fa-quote-right"></i>
        </div>

        <div className="App-author-content">
          <span>__</span>
          <span className="App-author">{author}</span>
        </div>
      </div>

      <div className="App-button-content">
        <button className="App-button" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
