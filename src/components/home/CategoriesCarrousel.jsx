import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProductStore } from "@/stores/productsStore";

export const CategoriesCarrousel = () => {
  const categories = useProductStore((state) => state.categories);
  console.log(categories);
  return (
    <Carousel className="w-full my-8">
      <CarouselContent className="-ml-1">
        {categories.map((categorie, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="h-48 flex items-center justify-center p-6 flex-col gap-3">
                  <img
                    className="rounded-full"
                    src="https://picsum.photos/200"
                    alt=""
                  />
                  <p className="capitalize text-blue-950 font-semibold">
                    {categorie}
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
