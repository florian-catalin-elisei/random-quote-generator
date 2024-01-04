import axios from "axios";

const quotesApiKey = process.env.REACT_APP_QUOTES_API_KEY;
const quotesApi = "https://api.api-ninjas.com/v1/quotes";

const instance = axios.create({
  baseURL: quotesApi,
  timeout: 5000,
  headers: {
    "X-Api-Key": quotesApiKey,
  },
});

const getQuotes = async () => {
  try {
    const response = await instance.get();
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error(`Error fetching quotes: ${error.message}`);
  }
};

export default getQuotes;
