import { Metadata } from "next";

//Components
import { Landing } from "@/components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-20 gap-8">
      <Landing />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home | Ben Rodger - Full-stack Developer",
  description: "Hi, I'm Ben. A Full-stack Developer with 2+ years of experience",
  keywords: [
    "ben",
    "ben rodger",
    "breon",
    "developer",
    "fullstack",
    "portfolio",
    "resume",
    "cv"
  ],
  openGraph: {
    siteName: "Ben Rodger - Full-stack Developer",
    title: "Home",
    description: "Hi, I'm Ben. A Full-stack Developer with 2+ years of experience"
  }
}