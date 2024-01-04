import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-25 gap-5 items-center justify-between px-12 py-12 lg:px-[350px] lg:py-8">
        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-4xl font-semibold leading-10 font-bold">
            Contact Us
          </h1>
          <p className="text-base leading-6 text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-12 py-2,5 items-center">
          <div className="border-slate-300 border-2 p-4 w-75 h-25 rounded-xl flex flex-col gap-[10px] w-[294px] text-wrap">
            <h1 className="text-2xl leading-10 font-bold">Address</h1>
            <p className="text-base leading-6 text-slate-700">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="border-slate-300 border-2 p-4 w-75 h-25 rounded-xl flex flex-col gap-[10px] w-[294px] text-wrap">
            <h1 className="text-2xl leading-10 font-bold">Contact</h1>
            <p className="text-base leading-6 text-slate-700">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
        <div className="border-white border-2 flex flex-col bg-gray-100 pt-8 pl-9 pr-[150px] pb-6 gap-6">
          <h1 className="h-25 rounded-xl text-lg leading-10 font-bold flex flex-col gap-[10px]">
            Leave a Message
          </h1>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="py-2 px-4 rounded-md"
            ></input>
            <input
              type="text"
              placeholder="Your Emale"
              className="py-2 px-4 rounded-md"
            ></input>
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="py-2 px-4 rounded-md"
          ></input>
          <input
            type="text"
            placeholder="Write a message"
            className="py-2 px-4 rounded-md"
          ></input>
        </div>
      </div>
      <Footer />
    </>
  );
}
