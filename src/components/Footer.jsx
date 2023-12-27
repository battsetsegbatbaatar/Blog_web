import React from "react";
import { Facebook } from "./Icon/Facebook";
import { Twitter } from "./Icon/Twitter";
import { Instagram } from "./Icon/Instagram";
import { LinkedInIcon } from "./Icon/LinkedInIcon";
import { FooterMetaLogo } from "./Icon/FooterMetaLogo";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-[25px] px-5  lg:px-[350px] lg:py-8   pt-16">
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-3">
            <h5>About</h5>
            <p className="text-base w-[280px] font-normal leading-6 text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col gap-1 text-base font-normal leading-6 text-slate-600">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className=" flex flex-col text-base font-normal leading-6 text-slate-600">
          <a href="/">Home</a>
          <a href="Blog">Blog</a>
          <a href="Contact">Contact</a>
        </div>
        <div className="flex gap-3">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedInIcon />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <FooterMetaLogo />
        <div className="flex gap-4 text-base font-normal leading-6 text-slate-600">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
