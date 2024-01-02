import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { AllBlog } from "@/components/AllBlog";
import { Hero } from "@/components/Hero";
import { Treand } from "@/components/Treand";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center  gap-25">
        <Header />
        <Hero />
        {/* <Treand /> */}
        <AllBlog href="[id]" />
        <Footer />
      </div>
    </>
  );
}
