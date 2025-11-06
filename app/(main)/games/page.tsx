//components
import { GoogleGameTile } from "@/components/google-components/google-games/google-gametile";

//Types
import { Metadata } from "next";

export default function Games() {
  return (
    <main className="mx-[170px] pl-4 text-white flex gap-20 pt-4">
      <GoogleGameTile></GoogleGameTile>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Games | Ben Rodger - Full-stack Developer",
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
