import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProductStore } from "@/stores/productsStore";

export const BannerCard = () => {
  const randomProduct = useProductStore((state) => state.getRandomProduct);
  const productItem = randomProduct();
  return (
    <Card className="p-8">
      <div className="flex justify-between gap-5">
        <CardHeader className="p-0">
          <CardTitle className="text-xl text-blue-950">
            {productItem.title}
          </CardTitle>
          {/* <CardDescription className="truncate">
            {productItem.description}
          </CardDescription> */}
        </CardHeader>
        <CardContent className="p-0">
          <img className="rounded-md h-36" src={productItem.images} alt="" />
        </CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <p>Type: {productItem.type}</p>
        <p>Gender: {productItem.gender}</p>
      </CardFooter>
    </Card>
  );
};
