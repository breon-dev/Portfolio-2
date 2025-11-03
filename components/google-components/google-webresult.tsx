//Components
import Image from "next/image";
import Link from "next/link";

//Icons
import { FaCircle } from "react-icons/fa";

//Utils
import { cn, generateRandomColor } from "@/lib/utils";

//Types
import { ProjectsLinkType } from "@/types";
import { Span } from "next/dist/trace";

//Interfaces
interface GoogleWebResultProps extends ProjectsLinkType {}

export const GoogleWebResult = async ({
  shortenedDomain,
  fullDomain,
  linkTitle,
  href,
  description,
}: GoogleWebResultProps) => {
  const iconColor: string = generateRandomColor();

  return (
    <section className="flex flex-col gap-2 mt-4 mb-8">
      <div className="flex items-center gap-3">
        <FaCircle
          style={{ color: iconColor }}
          className="cursor-pointer"
          size={30}
        />
        <div className="flex flex-col gap-1 font-light text-gray-300">
          <p className="font-normal">{shortenedDomain.toUpperCase()}</p>
          <p className="text-xs">{fullDomain}</p>
        </div>
      </div>
      {href ? (
        <Link
          href={href}
          target="_blank"
          className="text-xl text-blue-300 hover:underline cursor-pointer"
        >
          {linkTitle}
        </Link>
      ) : (
        <span className="text-xl text-blue-300 hover:underline cursor-pointer">
          {linkTitle}
        </span>
      )}
      <p className="text-sm text-gray-300">{description}</p>
    </section>
  );
};
