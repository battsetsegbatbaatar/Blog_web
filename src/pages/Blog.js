import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { TagButton } from "@/components/TagButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((articles) => setArticles(articles));
  }, []);
  return (
    <>
      <Header />
      <div className="flex justify-between px-12 py-12 lg:px-[350px] lg:py-8">
        <h1 className="font-sans font-bolt text-2xl">All Blog Post</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-5 lg:px-[350px] lg:py-8">
        {articles.map((article) => {
          return (
            <div className="border border-solid rounded-xl p-4 ">
              <img
                src={article.cover_image || "https://picsum.photos/536/354"}
                alt=""
                className="mb-4 h-60 w-90 rounded-md"
              />
              <div className="flex flex-col p-2 gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <TagButton slide={article} />
                  </div>
                  <p className="font-semibold">{article.title}</p>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="flex gap-4">
                    <img
                      className="rounded-full w-9"
                      src={
                        article.user.profile_image ||
                        "https://picsum.photos/536/354"
                      }
                      alt=""
                    />
                    <div>{article.user.name}</div>
                  </div>
                  <div>{article.created_at}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
