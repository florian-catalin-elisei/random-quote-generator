export const Quote = ({ quote, author, handleClick }) => {
  return (
    <div className="Quote">
      <h3 className="Quote-heading">Quote of the Day</h3>

      <div className="Quote-content">
        <div className="Quote-quote-content">
          <i className="fa-solid fa-quote-left"></i>
          <p className="Quote-quote">{quote}</p>
          <i className="fa-solid fa-quote-right"></i>
        </div>

        <div className="Quote-author-content">
          <span className="Quote-author-dash">&mdash;</span>
          <span className="Quote-author">{author}</span>
        </div>
      </div>

      <div className="Quote-button-content">
        <button className="Quote-button" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </div>
  );
};
