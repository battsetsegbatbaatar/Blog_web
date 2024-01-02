import { Container } from "postcss";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TagButton } from "./TagButton";

export const AllBlog = () => {
  const [articles, setArticles] = useState([]);
  const [articlesToShow, setArticlesToShow] = useState(6);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((articles) => setArticles(articles));
  }, []);

  const loadMore = () => {
    setArticlesToShow(articlesToShow + 3);
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-8 justify-between px-12 py-12 lg:px-[350px] lg:py-8">
          <h1 className="font-sans font-bold text-2xl ">All Blog Post</h1>
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <a
                href=""
                className=" text-slate-700 cursor-pointer hover:text-amber-500"
              >
                All
              </a>
              <a
                href=""
                className=" text-slate-700 cursor-pointer hover:text-amber-500"
              >
                Desing
              </a>
              <a
                href=""
                className=" text-slate-700 cursor-pointer hover:text-amber-500"
              >
                Travel
              </a>
              <a
                href=""
                className=" text-slate-700 cursor-pointer hover:text-amber-500"
              >
                Fashion
              </a>
              <a
                href=""
                className=" text-slate-700 cursor-pointer hover:text-amber-500"
              >
                Technology
              </a>
              <a
                href=""
                className=" text-slate-700 cursor-pointer hover:text-amber-500"
              >
                Branding
              </a>
            </div>
            <div className="text-slate-700 hover:text-amber-500 flex justify-end">
              <a href="Blog">View All</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-5 lg:px-[350px] lg:py-8">
          {articles.slice(0, articlesToShow).map((article) => {
            return (
              // <container>
              //   <Link href={`/${article.id}`}>
              <div className="border border-solid rounded-xl p-4 ">
                <img
                  src={article.cover_image}
                  alt=""
                  className="mb-4 h-60 w-90 rounded-md"
                />
                <container className="flex flex-col gap-4">
                  <div>
                    <TagButton slide={article} />
                  </div>
                  <p className="text-2xl font-semibold">{article.title}</p>
                  <div className="text-gray-600 text-base font-normal">
                    {article.created_at}
                  </div>
                </container>
              </div>
              //   </Link>
              // </container>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center my-4 ">
        <button
          onClick={loadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Load More
        </button>
      </div>
    </>
  );
};
