import React from "react";

export default function HeaderItem({ name, Icon }) {
  return (
    <div className="text-neutral-50 flex 
        items-center gap-3 text-[15px] 
        font-semibold  cursor-pointer 
        hover:underline underline-offset-8 
        mb-2">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}
