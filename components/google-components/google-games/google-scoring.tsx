
//Utils
import { cn } from "@/lib/utils";

//Interface
interface GoogleScoringProps {
  children: React.ReactNode;
  store?: boolean;
}

export const GoogleScoring = ({ children, store }: GoogleScoringProps) => {
  return (
    <section className="text-white font-semibold bg-slate-600 rounded-sm p-2 px-4">{children}</section>
  );
};
