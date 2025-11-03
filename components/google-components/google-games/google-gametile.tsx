import { FaAngleDown } from "react-icons/fa6";
import { GoogleTicTacToe } from "@/components/google-components/google-games/google-tictactoe";

export const GoogleGameTile = () => {
  return (
    <section className="border-[1px] border-gray-700 pt-3 pb-10 px-6 rounded-lg flex flex-col mt-4 w-[650px] gap-8">
      <div className="cursor-pointer">
        <p className="flex items-center gap-2 text-gray-400 text-base">
          <FaAngleDown size={10} /> Medium
        </p>
      </div>
      <section className="w-fit flex flex-col justify-center items-center m-auto gap-4">
        <GoogleTicTacToe />
      </section>
    </section>
  );
};
