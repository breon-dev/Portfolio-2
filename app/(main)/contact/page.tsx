//Components
import { GoogleWebResult } from "@/components/google-components/google-webresult";

//Constants
import { contactLinks } from "@/constants/contact-links";

//Types
import { Metadata } from "next";

export default function Contact() {
  return (
    <main className="mx-[170px] pl-4 text-white flex pt-4">
      <section className="max-w-[750px]">
        {contactLinks.map((values, index: number) => (
          <GoogleWebResult {...values} key={index} />
        ))}
      </section>
    </main>
  );
}


export const metadata: Metadata = {
  title: "Contact | Ben Rodger - Full-stack Developer",
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