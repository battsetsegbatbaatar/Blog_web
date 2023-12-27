import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { TagButton } from "./TagButton";

export const AllBlog = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((articles) => setArticles(articles));
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-8 justify-between px-12 py-12 lg:px-[350px] lg:py-8">
        <h1 className="font-sans font-bolt text-2xl">All Blog Post</h1>
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-5 lg:px-[350px] lg:py-8">
        {articles.map((article) => {
          return (
            <div className="border border-solid rounded-xl p-4 ">
              <img
                src={article.cover_image}
                alt=""
                className="mb-4 h-60 w-90 rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <TagButton tags={article.tag_list} />
                </div>
                <p className="font-semibold">{article.title}</p>
                <div>{article.created_at}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
