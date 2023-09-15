import React, { useEffect, useState } from "react";
import "./quote.css";
import quoteArray from "./quoteArray.json";
const Quote = () => {
  const [quote, setQuote] = useState({});
  const handleQuote = () => {
    const randomQuote = Math.floor(Math.random() * quoteArray.length);
    setQuote(quoteArray[randomQuote]);
  };
  useEffect(() => {
    handleQuote();
  }, []);

  return (
    <div>
      <div className="header-container">
        <h2>Generate Random Quote</h2>
        <button onClick={handleQuote}>Generate Quote</button>
      </div>

      <div>
        <div className="quote-card">
          {quote.quote}
          <h3>{quote.author}</h3>
        </div>
      </div>
    </div>
  );
};
export default Quote;
