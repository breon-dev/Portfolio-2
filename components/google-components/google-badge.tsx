"use client";

//Hooks
import { useState } from "react";

//Utils
import { cn } from "@/lib/utils";

//Interface
interface GoogleBadgeProps {
  children: string;
}

export const GoogleBadge = ({ children }: GoogleBadgeProps) => {
  const [backgroundColor, setBackgroundColor] =
    useState<string>("bg-transparent");

  const handleClick = () => {
    setBackgroundColor((prevColor) =>
      prevColor === "bg-transparent" ? "bg-blue-500" : "bg-transparent"
    );
  };

  return (
    <section
      className={cn(
        "bg-transparent border-[1px] border-gray-500 border-solid cursor-pointer rounded-full p-2 px-4 text-gray-200 text-sm transition-all w-fit",
        backgroundColor
      )}
      onClick={handleClick}
      aria-pressed="mixed"
    >
      {children}
    </section>
  );
};
