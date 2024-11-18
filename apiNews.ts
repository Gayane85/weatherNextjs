import axios from "axios";

const BASE1_URL = "https://newsapi.org/v2/everything";
const API_KEY = "0aec57aa6f724b5b8d776024d94b0866";
type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  url: string;
  publishedAt: string;
};

export const getNewsData = async () => {
  const response = await axios.get(BASE1_URL, {
    params: {
      q: "weather",
      apiKey: API_KEY,
      language: "en",
      pageSize: 17,
    },
  });
  return response.data;
};

export const getNewsDataDetalis = async (slug: string) => {
  const response = await axios.get(BASE1_URL, {
    params: {
      q: "weather",
      apiKey: API_KEY,
      language: "en",
      pageSize: 17,
    },
  });
  const article = response.data.articles.filter(
    (article: Article) => article.publishedAt === decodeURIComponent(slug)
  );
  return article || null;
};
