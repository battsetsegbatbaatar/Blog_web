import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const Detail = ({ article }) => {
  const { query } = useRouter;
  const [filteredArticles, setFilteredArticles] = useState([]);
  return (
    <>
      <Header />
      <container className="flex flex-col gap-[25px] px-5 lg:px-[350px] lg:py-8 pt-16">
        <div className="">{article.title}</div>
        <div>
          <img
            scr={article.user.profile_image || "https://picsum.photos/536/354"}
          />
          {article.user.name}
          {article.created_at}
        </div>
        <img scr={article.cover_image || "https://picsum.photos/536/354"} />
        <div>{article.description}</div>
      </container>
      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  const response = await fetch("https://dev.to/api/articles");
  const data = await response.json();
  console.log("params", params);
  const article = data.find(
    (article) => article.id === parseInt(params.id, 10)
  );
  return {
    props: {
      article,
    },
  };
}

export default Detail;
