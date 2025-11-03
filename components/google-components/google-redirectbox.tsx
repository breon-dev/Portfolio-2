"use client";

//Components
import Link from "next/link";

//Constants
import { links } from "@/constants/links";

//Interface
interface GoogleRedirectBoxProps {
  children: string;
  defaultLink?: boolean;
}

export const GoogleRedirectBox = ({ children, defaultLink }: GoogleRedirectBoxProps) => {
  const styles: string =
    "p-2 px-4 text-gray-200 text-sm bg-light-gray rounded-md border-[1px] border-transparent hover:border-[1px] hover:border-gray-500 hover:shadow-lg transition-all";

  const handleClick = () => {
    const newLink: string = links[Math.floor(Math.random() * links.length)];
    window.open(newLink, "_blank");
  };

  return defaultLink ? (
    <Link
      href="/search"
      className={styles}
      target={!defaultLink ? "_blank" : "_self"}
    >
      {children}
    </Link>
  ) : (
    <button onClick={handleClick} className={styles}>
      {children}
    </button>
  );
};
