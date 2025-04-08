import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { initialData } from "@/stores/seed-data";
import { CheckboxItem } from "./CategoryItem";

export const FilterCategory = () => {

  const countByTag = initialData.products.reduce((acc, product) => {
    product.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <Accordion collapsible className="border-1 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Categoría</AccordionTrigger>
        <AccordionContent className="flex flex-col">
          {Object.entries(countByTag).map(([ tag, count ]) => (
            <CheckboxItem key={tag} tag={tag} count={count}/>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}