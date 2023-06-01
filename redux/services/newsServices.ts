import axios from "axios";

const baseUrl = 'https://newsapi.org/v2/';
const endpoint = 'top-headlines';
const country = 'us';
const category = 'business'
const apiKey = process.env.NEXT_PUBLIC_API_KEY


const latestNews = async () => {
    const res = await axios.get(`${baseUrl}${endpoint}?country=${country}&apiKey=${apiKey}`)
    return res.data
}

const businessNews = async () => {
    const res = await axios.get(`${baseUrl}${endpoint}?country=${country}&category=${category}&apiKey=${apiKey}`)
    return res.data
}


const newsServices = {
    latestNews,
    businessNews
}

export default newsServices