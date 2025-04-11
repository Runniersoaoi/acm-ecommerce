import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { initialData } from "@/stores/seed-data";
import { CheckboxItem } from "./CategoryItem";

export const FilterCategory = () => {

  const categoryEsp = {
    sweatshirt: 'Sudaderas',
    jacket: 'Chaquetas',
    shirt: 'Camisas',
    hoodie: 'Capuchas',
    hats: 'Gorras'
  }

  const countByCategory = initialData.products.reduce((acc, product) => {
    product.tags.forEach(category => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <Accordion collapsible className="border-1 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Categoría</AccordionTrigger>
        <AccordionContent className="flex flex-col">
          {Object.entries(countByCategory).map(([ category, count ]) => (
            <CheckboxItem key={category} tag={categoryEsp[category]} count={count}/>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}