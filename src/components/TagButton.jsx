import React from "react";

export const TagButton = ({ slide }) => {
  console.log("slides", slide?.tag_list);
  return (
    <container>
      {slide?.tag_list.map((button) => (
        <button className="px-[10px] py-1 rounded-md font-sans bg-indigo-50 text-indigo-500 m-1">
          {button}
        </button>
      ))}
    </container>
  );
};
