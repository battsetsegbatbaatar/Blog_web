import React from "react";

export const TagButton = (props) => {
  console.log(props, "mmm");
  return (
    <>
      {props.tags.map((button) => (
        <button className="px-[10px] py-1 rounded-md font-sans bg-indigo-50 text-indigo-500 m-1">
          {button}
        </button>
      ))}
    </>
  );
};
