//Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

//Types
import { AccordionItemType } from "@/types";

//Interface
interface GoogleAccordionProps {
  items: AccordionItemType[];
}

export const GoogleAccordion = ({ items }: GoogleAccordionProps) => {
  return (
    
    <section className="w-full">
      <h2 className="text-2xl text-gray-200 w-full border-b-[1px] border-b-divider-gray py-3">People also ask</h2>
      <Accordion type="single" className="w-full" collapsible>
        {items.map(({value, triggerName, content}, index) => (
          <AccordionItem value={value} key={index}>
            <AccordionTrigger>{triggerName}</AccordionTrigger>
            <AccordionContent>
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
