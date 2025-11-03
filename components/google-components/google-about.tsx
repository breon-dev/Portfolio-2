//Components
import Link from "next/link";

//Types
import { 
  AboutInfoType, 
  AboutInfoIsLinkType 
} from "@/types";

//Interfaces

interface GoogleAboutProps extends AboutInfoType {};

interface HandleMappingProps {
  itemsTitle: string;
  items: AboutInfoIsLinkType[];
}

export const GoogleAbout = ({
  description,
  birthDetails,
  partners,
  parents,
  siblings,
  height,
}: GoogleAboutProps) => {
  return (
    <section className="p-6 w-full max-w-[400px] flex flex-col justify-start gap-3 border-l-[1px] border-gray-600 h-fit">
      <h3 className="text-xl text-gray-200">About</h3>
      <p className="text-gray-400 flex w-full">{description}</p>
      <HandleMapping itemsTitle="Born" items={birthDetails} />
      <HandleMapping itemsTitle="Partners" items={partners} />
      <HandleMapping itemsTitle="Parents" items={parents} />
      <HandleMapping itemsTitle="Siblings" items={siblings} />
      <div className="text-gray-300 flex gap-x-2 w-full">
        <span className="text-gray-400 font-semibold">Height: </span>
        {height}
      </div>
    </section>
  );
};

const HandleMapping = ({ itemsTitle, items }: HandleMappingProps) => {
  return (
    <div className="text-gray-300 inline w-full">
      <span className="text-gray-300 font-semibold">{itemsTitle}: </span>{" "}
      {items.map(({ value, href }: AboutInfoIsLinkType, index: number) =>
        href ? (
          <Link
            href={href}
            key={index}
            target="_blank"
            className="text-blue-300 cursor-pointer hover:underline underline-offset-2"
          >
            {value}{" "}
          </Link>
        ) : (
          <span key={index} className="text-gray-400">
            {value}{" "}
          </span>
        )
      )}
    </div>
  );
};
