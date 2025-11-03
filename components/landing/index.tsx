//Components
import Link from "next/link";
import { GoogleRedirectBox } from "@/components/google-components/google-redirectbox";
import { SearchBox } from "@/components/landing/search-box";

export const Landing = () => {
  return (
    <>
      <h1 className="text-white text-7xl font-medium">Google</h1>
      <SearchBox />
      <div className="flex items-center gap-[0.75rem]">
        <GoogleRedirectBox defaultLink>Google Search</GoogleRedirectBox>
        <GoogleRedirectBox>I'm Feeling Lucky</GoogleRedirectBox>
      </div>
      <p className="text-gray-400 text-xs">
        This is not Google, click{" "}
        <Link
          href="https://google.com"
          className="underline text-cyan-500 hover:text-cyan-300 transition-all"
          aria-label="Link to google.com"
        >
          here
        </Link>{" "}
        to go the real one
      </p>
    </>
  );
};
