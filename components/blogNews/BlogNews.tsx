import React from "react";
import AllNews from "../allNews/AllNews";
import TopStories from "../topStories/TopStories";
import { useQuery } from "@tanstack/react-query";
import { getNewsData } from "@/apiNews";

type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
};

const BlogNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: getNewsData,
    // refetchInterval: 60000,
    // refetchOnWindowFocus: true,
    // staleTime: 0,
  });
  console.log("data:", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error:{error.message}</h1>;
  }
  if (!data || !data.articles) {
    return <h1>No articles available</h1>;
  }

  const articles: Article[] = data.articles || [];
  const topStoriesNews = articles.slice(0, 2);
  const wordTodayNews = articles.slice(2, 5);
  const allNews = articles.slice(5);

  return (
    <div>
      <div className="flex cols-2 gap-[7rem] mt-[5.6rem] ">
        <AllNews news={allNews} />
        <TopStories topStories={topStoriesNews} wordToday={wordTodayNews} />
      </div>
    </div>
  );
};

export default BlogNews;
