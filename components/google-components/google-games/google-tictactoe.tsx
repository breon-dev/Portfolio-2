"use client";

// Hooks
import { useState, useEffect, useCallback } from "react";

// Utils
import { cn } from "@/lib/utils";

// Components
import { Button } from "@/components/ui/button";
import { GoogleScoring } from "@/components/google-components/google-games/google-scoring";

// Constants
const TILE_COUNT: number = 25;
const INITIAL_SCORE: number = 10;
const SCORE_MULTIPLIER: number = 1.03;

// Interface
interface GameTileProps {
  number: number;
  color: string;
  onClick: () => void;
}

export const GoogleTicTacToe = () => {
  // Tiles
  const initialTilesState = Array.from({ length: TILE_COUNT }, () => "bg-blue-500");
  const [tiles, setTiles] = useState<string[]>(initialTilesState);
  const [bombIndex, setBombIndex] = useState<number | null>(null);

  // Game
  const [score, setScore] = useState<number>(10);
  const [stop, setStop] = useState<boolean>(false);
  const [highscore, setHighscore] = useState<number>(0);

  // Sets random bomb tile
  useEffect(() => {
    setBombIndex(generateRandomIndex());
  }, []);

  const generateRandomIndex = () => Math.floor(Math.random() * TILE_COUNT);

  const handleTileClick = useCallback((index: number) => {
    if (stop || tiles[index] === "bg-emerald-500") return;

    setTiles((prevTiles) => {
      const newTiles = [...prevTiles];
      if (index === bombIndex) {
        newTiles[index] = "bg-red-500";
        setStop(true);
      } else {
        newTiles[index] = "bg-emerald-500";
        const updatedScore = Math.floor(score * (1.01 * 3));
        setScore(updatedScore);
        setHighscore((prevHighscore) => Math.max(prevHighscore, updatedScore));
      }
      return newTiles;
    });
  }, [bombIndex, stop, score, tiles]);

  const resetTiles = () => {
    setTiles(initialTilesState);
    setBombIndex(generateRandomIndex());
    setScore(10);
    setStop(false);
  };

  return (
    <>
      <div className="flex justify-center gap-4 w-fit">
        <GoogleScoring>SCORE: {score}</GoogleScoring>
        <GoogleScoring>HIGHSCORE: {highscore}</GoogleScoring>
      </div>
      <section className="grid grid-cols-5 gap-2 p-3 border-solid border-slate-400 border-2 rounded-md">
        {tiles.map((color, index) => (
          <GameTile
            number={index + 1}
            key={index}
            color={color}
            onClick={() => handleTileClick(index)}
          />
        ))}
      </section>
      <div className="w-96">
        <Button variant="secondary" onClick={resetTiles} className="w-full">
          Reset
        </Button>
      </div>
    </>
  );
};

export const GameTile = ({ number, color, onClick }: GameTileProps) => {
  return (
    <section
      className={cn(
        color,
        "flex justify-center items-center h-20 w-20 rounded-md hover:scale-105 hover:opacity-80 cursor-pointer transition-all"
      )}
      onClick={onClick}
    >
      <h3 className="text-white text-xl">{number}</h3>
    </section>
  );
};
