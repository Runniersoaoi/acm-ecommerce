import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxItem } from "./CheckboxItem";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCategory } from "@/store/shop/shopSlice";

export const FilterCategory = () => {
  const categoryEsp = {
    sweatshirt: "Sudaderas",
    jacket: "Chaquetas",
    shirt: "Camisas",
    hoodie: "Capuchas",
    hats: "Gorras",
  };

  const categoryInverted = Object.entries(categoryEsp).reduce(
    (acc, [en, es]) => {
      acc[es] = en;
      return acc;
    },
    {}
  );

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const countByCategory = products.reduce((acc, product) => {
    product.tags.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});

  const onSelectCategory = (selectedEspCategory) => {
    const englishCategory = categoryInverted[selectedEspCategory];

    if (englishCategory) {
      dispatch(setFilterCategory(englishCategory));
    }
  };

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
              onSelect={onSelectCategory}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
