"use client";

//Hooks
import { useState } from "react";
import { useRouter } from "next/navigation";

//Icons
import { FaSearch, FaMicrophone, FaCamera, FaTimes } from "react-icons/fa";

//Types
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

//Utils
import { cn } from "@/lib/utils";

export const SearchBox = () => {
  const [active, setActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("Ben Rodger");
  const router: AppRouterInstance = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim().length > 0) {
      router.push("/search");
    }
  }

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <section
      className={cn(
        "px-4 py-[0.7rem] flex items-center w-[600px] gap-4 shadow-md border-gray-500 border-[1px] rounded-full hover:shadow-xl hover:bg-light-gray hover:border-light-gray transition-all",
        { "bg-light-gray border-light-gray": active }
      )}
    >
      <FaSearch className="text-gray-500" size={18} />
      <input
        type="search"
        value={searchValue}
        aria-label="Search Input"
        className="bg-transparent outline-none w-full text-gray-200 font-lightbold"
        onChange={handleSearchChange}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onKeyDown={handleKeyDown}
      />
      {searchValue.length > 0 && (
        <span
          title="Clear"
          className="pr-2 border-r-[1px] border-gray-500"
          onClick={handleClear}
        >
          <FaTimes className="text-gray-500 cursor-pointer" size={18} />
        </span>
      )}
      <span title="Search by voice">
        <FaMicrophone className="text-gray-300 cursor-pointer" size={18} />
      </span>
      <span title="Search by image">
        <FaCamera className="text-gray-300 cursor-pointer" size={18} />
      </span>
    </section>
  );
};
