"use client";

//Components
import Link from "next/link";

//Constants
import { navLinks } from "@/constants/navLinks";

//Hooks
import { useState } from "react";

//Utils
import { cn } from "@/lib/utils";

//Interface
interface NavItemProps extends React.ComponentPropsWithRef<"a"> {
  children: string;
  href: string;
}

export const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <nav className="ml-[170px] mt-4 pl-4">
      <ul className="flex gap-4">
        {navLinks.map(({ name, href }, index) => (
          <NavItem
            href={href}
            className={selectedIndex === index ? "text-white border-b-2" : "text-gray-400"}
            key={index}
            onClick={() => handleClick(index)}
          >
            {name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export const NavItem = ({ children, href, ...props }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn("text-sm h-12 px-1 flex items-center justify-center", props.className)}
      onClick={props.onClick}
    >
      {children}
    </Link>
  );
};
