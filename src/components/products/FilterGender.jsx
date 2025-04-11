import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { initialData } from "@/stores/seed-data";
import { CheckboxItem } from "./CategoryItem";

export const FilterGender = () => {

  const genderEsp = {
    men: 'Hombres',
    women: 'Mujeres',
    kid: 'Niños',
    unisex: 'Unisex'
  }

  const countByGender = initialData.products.reduce((acc, product) => {
      const gender = product.gender
      acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});

  return (
    <Accordion collapsible className="border-1 px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Sección</AccordionTrigger>
        <AccordionContent className="flex flex-col">
          {Object.entries(countByGender).map(([ gender, count ]) => (
            <CheckboxItem key={gender} tag={genderEsp[gender]} count={count}/>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}