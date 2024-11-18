"use client";
import { getNewsDataDetalis } from "@/apiNews";

import TopStoriesButton from "@/components/topStoriesButton/TopStoriesButton";
import { useQuery } from "@tanstack/react-query";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Params {
  slug: string;
}

const NewsPage = () => {
  const { slug } = useParams<Params>();
  if (!slug) {
    return <h1>Slug not found</h1>;
  }

  const {
    data: article,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["news-articles", slug],
    queryFn: () => getNewsDataDetalis(slug),
    enabled: !!slug,
  });
  console.log("dataNews:", slug);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error:{error.message}</h1>;
  }
  if (!article) {
    return <h1>No articles available</h1>;
  }

  console.log("newsPage:", article);
  const newsArticle = article[0];

  return (
    <div className="my-auto  flex justify-center items-center">
      <div className=" relative flex flex-col justify-center items-center w-[28rem] h-[534px] mt-[8rem] ">
        <div>
          <Image
            className="rounded-t-[28px] h-[15.5rem] "
            src={newsArticle.urlToImage || "/example.jpeg"}
            alt={newsArticle.title}
            width={448}
            height={248}
          />
        </div>

        <div className=" flex flex-col pt-4 pl-3 mb-3 text-left w-[28rem] border border-[#ADADC3] bg-[#ADADC3]/25 h-[286px] rounded-b-[14px]">
          <div className="text-#5B5B79 font-bold pb-5 text-center">
            {newsArticle.title}
          </div>
          <div className="text-#5B5B79 font-normal text-center">
            {newsArticle.description}
          </div>
        </div>

        <Link className=" right-0" href="/">
          <TopStoriesButton text={"Bact to Home Page"} />
        </Link>
      </div>
    </div>
  );
};

export default NewsPage;
