import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProductStore } from "@/stores/productsStore";
import { Button } from "../ui/button";

export const CardBannerPrincipal = () => {
  const randomProduct = useProductStore((state) => state.getRandomProduct);
  const productItem = randomProduct();
  return (
    <Card className="p-6 flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
      <CardContent className="flex-1 flex flex-col justify-center">
        <CardHeader className="p-0">
          <CardTitle className="text-3xl text-blue-950 font-semibold">
            {productItem.title}
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            {productItem.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="mt-4 flex gap-4 text-gray-700 text-sm">
          <p>
            <span className="font-semibold">Tipo:</span> {productItem.type}
          </p>
          <p>
            <span className="font-semibold">Género:</span> {productItem.gender}
          </p>
        </CardFooter>
        <Button className="my-5 px-8 py-5 bg-blue-700">Comprar ahora</Button>
      </CardContent>

      <CardContent className="flex-shrink-0">
        <img
          className="rounded-lg h-64 w-64 object-cover shadow-md"
          src={productItem.images}
          alt={productItem.title}
        />
      </CardContent>
    </Card>
  );
};
