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
    <Accordion type="single" collapsible className="px-6 bg-white rounded-md">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:-translate-y-[1px] [&>svg]:!h-6 [&>svg]:!w-6">
          Precio
        </AccordionTrigger>
        <AccordionContent>
          <div className="h-px bg-gray-300 mb-2 w-full" />

          <span className="text-sm mt-3 text-gray-700">Desde S/.{range[0]} hasta S/.{range[1]}</span>
          <Slider 
            className="mt-4 w-full
              [&_[role=slider]]:bg-blue-800
              [&_[role=slider]]:border-white
              [&_[data-slot=slider-range]]:bg-blue-800
              [&_[data-slot=slider-track]]:bg-gray-300
              [&_[role=slider]]:border-2
            " 
            onValueChange={setRange}
            value={range}
            max={100} 
            step={5}
          />

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}