//Components
import { GoogleAccordion } from "@/components/google-components/google-accordion";
import { GoogleAbout } from "@/components/google-components/google-about";
import { GoogleWebResult } from "@/components/google-components/google-webresult";

//Constants
import { accordionLinks } from "@/constants/accordion-links";
import { aboutInfo } from "@/constants/about-info";
import { projectLinks } from "@/constants/project-links";

//Types
import { Metadata } from "next";

export default function Search() {
  return (
    <main className="mx-[170px] pl-4 text-white flex gap-20 pt-4">
      <section className="w-full max-w-[750px]">
        <GoogleWebResult
          shortenedDomain="benrodger.dev"
          fullDomain="https://www.benrodger.dev"
          linkTitle="Ben - Fullstack Developer"
          href=""
          description="Hi, I'm Ben. A Fullstack Developer with 2+ years of experience"
        />
        <GoogleAccordion items={accordionLinks} />
        <section id="projects">
          {projectLinks.map((values, index: number) => (
            <GoogleWebResult {...values} key={index} />
          ))}
        </section>
      </section>
      <GoogleAbout {...aboutInfo} />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Search | Ben Rodger - Full-stack Developer",
  description:
    "Hi, I'm Ben. A Full-stack Developer with 2+ years of experience",
  keywords: [
    "ben",
    "ben rodger",
    "breon",
    "developer",
    "fullstack",
    "portfolio",
    "resume",
    "cv",
  ],
  openGraph: {
    siteName: "Ben - Full-stack Developer",
    title: "Search",
    description:
      "Hi, I'm Ben. A Fullstack Developer with 2+ years of experience",
  },
};
