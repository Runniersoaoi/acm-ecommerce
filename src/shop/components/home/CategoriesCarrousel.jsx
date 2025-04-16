import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";

export const CategoriesCarrousel = () => {
  const { categories } = useSelector((state) => state.products);
  return (
    <Carousel className="w-full my-8">
      <CarouselContent className="-ml-1">
        {categories.map((categorie) => (
          <CarouselItem
            key={categorie.name}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="h-48 flex items-center justify-center p-6 flex-col gap-3">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
                    <img
                      className="object-cover w-full h-full"
                      src={categorie.image}
                      alt={categorie.name}
                    />
                  </div>
                  <p className="capitalize text-blue-950 font-semibold">
                    {categorie.name}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
