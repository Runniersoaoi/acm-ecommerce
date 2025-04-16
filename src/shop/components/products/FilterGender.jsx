import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxItem } from "./CheckboxItem";
import { useDispatch, useSelector } from "react-redux";
import { setFilterSection } from "@/store/shop/shopSlice";

export const FilterGender = () => {
  const genderEsp = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Unisex",
  };

  const categoryInverted = Object.entries(genderEsp).reduce((acc, [en, es]) => {
    acc[es] = en;
    return acc;
  }, {});

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const countByGender = products.reduce((acc, product) => {
    const gender = product.gender;
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});

  const onSelectGender = (selectedGenderCategory) => {
    const englishGender = categoryInverted[selectedGenderCategory];

    if (englishGender) {
      dispatch(setFilterSection(englishGender));
    }
  };

  return (
    <Accordion collapsible className="px-6 bg-white rounded-md">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline cursor-pointer [&>svg]:-translate-y-[1px] [&>svg]:!h-6 [&>svg]:!w-6">
          Sección
        </AccordionTrigger>
        <AccordionContent className="flex flex-col">
          <div className="h-px bg-gray-300 mb-2 w-full" />
          {Object.entries(countByGender).map(([gender, count]) => (
            <CheckboxItem
              key={gender}
              tag={genderEsp[gender]}
              count={count}
              onSelect={onSelectGender}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
