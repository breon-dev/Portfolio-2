import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateRandomColor = (): string => {
  const randomNum = Math.floor(Math.random() * 0xFFFFFF);
  const hexColor = `#${randomNum.toString(16).padStart(6, '0')}`;

  return hexColor.toUpperCase();
};
