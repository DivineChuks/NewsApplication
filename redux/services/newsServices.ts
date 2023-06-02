import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";
const endpoint = "top-headlines";
const country = "us";
const category = "business";
const pageLimit = 3;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// Get Latest News Async Function Using Axios
const latestNews = async (sourceQuery: string) => {
  let url: string;

  if (sourceQuery) {
    url = `${baseUrl}${endpoint}?sources=${sourceQuery}&apiKey=${apiKey}`;
  } else {
    url = `${baseUrl}${endpoint}?country=${country}&apiKey=${apiKey}`;
  }

  const res = await axios.get(url);
  return res.data;
};

// Get Business News Async Function Using Axios For Hero Section.

const businessNews = async () => {
  const res = await axios.get(
    `${baseUrl}${endpoint}?country=${country}&category=${category}&pageSize=${pageLimit}&apiKey=${apiKey}`
  );
  return res.data;
};

const newsServices = {
  latestNews,
  businessNews,
};

export default newsServices;
