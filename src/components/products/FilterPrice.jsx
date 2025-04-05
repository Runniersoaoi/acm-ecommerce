import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FilterPrice = () => {
  return (
    <Accordion type="single" collapsible className="border-1 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Precio</AccordionTrigger>
        <AccordionContent>
          Añadir slider
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}