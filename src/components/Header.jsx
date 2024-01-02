import React from "react";
import { MetaBlogLogo } from "./Icon/MetaBlogLogo";
import { MenuIcon } from "./Icon/MenuIcon";

export const Header = () => {
  return (
    <div class="flex justify-between px-5 py-5 lg:px-[350px] lg:py-8">
      <MetaBlogLogo />
      <div class="hidden lg:flex gap-10 justify-center items-center text-base font-normal leading-6 text-gray-600">
        <a href="/">Home</a>
        <a href="Blog">Blog</a>
        <a href="Contact">Contact</a>
      </div>
      <MenuIcon />
    </div>
  );
};
