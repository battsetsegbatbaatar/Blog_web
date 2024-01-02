import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { TagButton } from "./TagButton";

export const Treand = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((articles) => setArticles(articles));
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <div className="flex flex-row items-center justify-between px-5 py-5 lg:px-10 lg:py-10">
            <container className=" relative">
              <img
                className="rounded-md w-[289px]"
                src={article.cover_image || "https://picsum.photos/536/354"}
                alt=""
              />
              <div className="absolute bottom-2 h-1/2 p-10 rounded-xl items-start gap-4">
                <div className=" flex flex-col">
                  <TagButton slide={article} />
                  <div className="font-semibold line-clamp-2">
                    <h1>{article.description}</h1>
                  </div>
                  <p className="font-normal text-secondary-400">
                    {article.created_at}
                  </p>
                </div>
              </div>
            </container>
          </div>
        );
      })}
    </div>
  );
};
