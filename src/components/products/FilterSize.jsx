import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FilterSize = () => {
  return (
    <Accordion type="single" collapsible className="border-1 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Talla</AccordionTrigger>
        <AccordionContent>
          Añadir buttons
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}