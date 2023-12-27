import React, { useEffect, useState } from "react";
import { TagButton } from "./TagButton";

export const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((articles) => setArticles(articles));
  }, []);
  function handleNextClick() {
    setIndex(index + 1);
  }
  function handleMoreClick() {
    setIndex(index - 1);
  }
  let slide = articles[index];
  return (
    <div className="flex flex-col items-center justify-between px-5 py-5 lg:px-[350px] lg:py-8">
      <container className=" relative">
        <img
          className="rounded-md"
          src={slide?.cover_image || "https://picsum.photos/536/354"}
          alt=""
        />
        <div className="absolute bottom-2 left-2 ">
          <div className="w-148 p-10 bg-white w-1/2 max-h-1/2 rounded-xl flex flex-col justify-between">
            {/* <GreenBtn tags={slide?.tag_list} /> */}
            <div className="text-4xl font-semibold line-clamp-2">
              <h1>{slide?.description}</h1>
            </div>
            <p className="text-base font-normal text-secondary-400">
              {slide?.created_at}
            </p>
          </div>
        </div>
      </container>
      <div className="flex justify-end">
        <button onClick={handleNextClick} className="border rounded-md p-2">
          {"<"}
        </button>
        <button onClick={handleMoreClick} className="border rounded-md p-2">
          {">"}
        </button>
      </div>
    </div>
  );
};
