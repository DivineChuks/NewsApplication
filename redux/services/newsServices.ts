import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";
const endpoint = "top-headlines";
const country = "us";
const category = "business";
const pageLimit = 3;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const latestNews = async (source) => {
    const url = source ? `${baseUrl}${endpoint}?sources=${source}&apiKey=${apiKey}`: `${baseUrl}${endpoint}?country=${country}&apiKey=${apiKey}`
  const res = await axios.get(url);
  console.log(url)
  return res.data;
};

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
