import { useState, useEffect } from "react";
import { Quote } from "./components/Quote";
import { getQuotes } from "./api/getQuotes";
import "./App.css";

export const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleClick = async () => {
    const quotes = await getQuotes();
    const { quote, author } = quotes;

    setQuote(quote);
    setAuthor(author);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return <Quote quote={quote} author={author} handleClick={handleClick} />;
};
