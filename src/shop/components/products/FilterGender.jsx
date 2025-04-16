import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { initialData } from "@/store/seed-data";
import { CheckboxItem } from "./CheckboxItem";

export const FilterGender = () => {
  const genderEsp = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Unisex",
  };

  const countByGender = initialData.products.reduce((acc, product) => {
    const gender = product.gender;
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});

  return (
    <Accordion collapsible className="px-6 bg-white rounded-md">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:-translate-y-[1px] [&>svg]:!h-6 [&>svg]:!w-6">
          Sección
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="h-px bg-gray-300 mb-2 w-full" />
          {Object.entries(countByGender).map(([gender, count]) => (
            <CheckboxItem key={gender} tag={genderEsp[gender]} count={count} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
