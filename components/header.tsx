//Components
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { Navbar } from "@/components/navbar";

//Constants
import { navLinks } from "@/constants/navLinks";

//Icons
import { FaTh } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="pt-6 border-solid border-b-[1px] border-gray-700">
      <section className="flex items-center justify-between">
        <Link href="/search" className="absolute p-6">
          <h1 className="text-white text-3xl font-medium">Google</h1>
        </Link>
        <SearchBar />
        <div className="flex items-center gap-4 pr-4 pl-16">
          <FaTh className="text-gray-300 cursor-pointer" />
          <FaCircle className="text-white cursor-pointer" size={30} />
        </div>
      </section>
      <Navbar />
    </header>
  );
};

