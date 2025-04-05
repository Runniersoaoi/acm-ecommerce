import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const ViewOptions = () => {
  return (
    <Accordion className="m-2 w-4/5 px-4 border-1">
      <AccordionItem value="reset">
        <AccordionTrigger className="[&>svg]:hidden hover:no-underline">
          {/* Añadir select */}
          <span>Mostrando 10 de 20 productos</span>
          {/* Añadir buttons */}
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
}