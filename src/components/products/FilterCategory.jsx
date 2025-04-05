import { Card } from "../ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FilterCategory = () => {
  return (
    <Accordion collapsible className="border-1 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Categoría</AccordionTrigger>
        <AccordionContent>
          Añadir checkboxs
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}