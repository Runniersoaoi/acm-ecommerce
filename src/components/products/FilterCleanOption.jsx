import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion"

export const FilterCleanOption = () => {
  return (
    <Accordion className="border-1 m-2 w-1/5 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="[&>svg]:hidden hover:no-underline">
          <div className="w-full flex justify-between items-center">
            <span>Filtros:</span>
            <span className="text-blue-500 hover:underline">Limpiar todo</span>
          </div>
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
}