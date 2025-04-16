import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { initialData } from "@/store/seed-data";
import { CheckboxItem } from "./CheckboxItem";

export const FilterCategory = () => {
  const categoryEsp = {
    sweatshirt: "Sudaderas",
    jacket: "Chaquetas",
    shirt: "Camisas",
    hoodie: "Capuchas",
    hats: "Gorras",
  };

  const countByCategory = initialData.products.reduce((acc, product) => {
    product.tags.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <Accordion collapsible className="px-6 bg-white rounded-md">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:-translate-y-[1px] [&>svg]:!h-6 [&>svg]:!w-6">
          Categoría
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="h-px bg-gray-300 mb-2 w-full" />

          {Object.entries(countByCategory).map(([category, count]) => (
            <CheckboxItem
              key={category}
              tag={categoryEsp[category]}
              count={count}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
