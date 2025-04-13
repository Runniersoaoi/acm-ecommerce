import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { useState } from "react";


export const FilterPrice = () => {
  
  const [range, setRange] = useState([20, 80])

  return (
    <Accordion type="single" collapsible className="border-1 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Precio</AccordionTrigger>
        <AccordionContent>
          <span className="text-sm mt-3 text-gray-700">Desde S/.{range[0]} hasta S/.{range[1]}</span>
          <Slider 
            className="mt-4" 
            onValueChange={setRange}
            value={range}
            max={100} 
            step={10}
             />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}