import React, { useEffect, useState } from "react";
import { TagButton } from "./TagButton";
import { Arrow } from "./Icon/Arrow";
import { ArrowNext } from "./Icon/ArrowNext";

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

  // console.log("slide", slide?.tag_list[0]);
  return (
    <>
      <div className="flex flex-col  items-center justify-between px-5 py-5 lg:px-[350px] lg:py-8">
        <container className="relative">
          <img
            className="rounded-md w-[1500px] h-[600px]"
            src={slide?.cover_image || "https://picsum.photos/536/354"}
            alt=""
          />
          <div className="absolute bottom-2 left-2">
            <div className="p-10 bg-white w-1/2 h-[280px] rounded-xl flex flex-col justify-between">
              <TagButton slide={slide} />
              <div className="text-4xl font-semibold line-clamp-2">
                <h1>{slide?.description}</h1>
              </div>
              <p className="text-base font-normal text-gray-600 mt-3">
                {slide?.created_at}
              </p>
            </div>
          </div>
        </container>
      </div>
      <div className="flex justify-end mt-3 gap-2 px-5 py-5 lg:px-[350px] lg:py-8">
        <button onClick={handleNextClick} className="border rounded-md p-2">
          {Arrow}
        </button>
        <button onClick={handleMoreClick} className="border rounded-md p-2">
          {ArrowNext}
        </button>
      </div>
    </>
  );
};
