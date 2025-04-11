import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { CheckboxItem } from "./CategoryItem";
import { initialData } from "@/stores/seed-data";

export const FilterSize = () => {

  const countBySize = initialData.products.reduce((acc, product) => {
    product.sizes.forEach(size => {
      acc[size] = (acc[size] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <Accordion collapsible className="border-1 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Talla</AccordionTrigger>
        <AccordionContent className="flex flex-col">
          {Object.entries(countBySize).map(([ size, count ]) => (
            <CheckboxItem key={size} tag={size} count={count}/>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}