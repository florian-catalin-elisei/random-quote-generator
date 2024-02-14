import axios from "axios";

const quotesApi = "https://get-quotes-api.p.rapidapi.com/random";
const quotesApiHost = "get-quotes-api.p.rapidapi.com";
const quotesApiKey = process.env.REACT_APP_QUOTES_API_KEY;

const instance = axios.create({
  baseURL: quotesApi,
  headers: {
    "X-RapidAPI-Host": quotesApiHost,
    "X-RapidAPI-Key": quotesApiKey,
  },
});

export const getQuotes = async () => {
  try {
    const { data } = await instance.get();
    const { author, quote } = data.quote;

    return { author, quote };
  } catch (error) {
    throw new Error(`Failed to get quotes: ${error.message}`);
  }
};
