import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";

const sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export const FilterSize = () => {

  const [activeSizes, setActiveSizes] = useState([]);
  
  const toggleSize = (size) => {
    setActiveSizes(prev => prev.includes(size)
      ? prev.filter(s => s !== size)
      : [...prev, size]
    )
  }

  return (
    <Accordion collapsible className="px-6 bg-white rounded-md">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:-translate-y-[1px] [&>svg]:!h-6 [&>svg]:!w-6">
          Talla
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="h-px bg-gray-300 mb-2 w-full" />
        <div className="grid grid-cols-4 gap-3 mt-2 font-medium">
          {sizeList.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`py-1.5 text-center rounded-md cursor-pointer hover:bg-blue-800 hover:text-white transition-colors
                ${activeSizes.includes(size)
                  ? 'bg-blue-800 text-white' 
                  : 'bg-gray-200'
                }`
              }
            >
              {size}
            </button>
          ))}
        </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}