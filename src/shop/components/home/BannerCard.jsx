import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { selectRandomProduct } from "@/store/shop/thunks";
import { useSelector } from "react-redux";

export const BannerCard = () => {
  const randomProduct = useSelector(selectRandomProduct);
  if (!randomProduct) {
    return (
      <div className="text-center text-gray-500 mt-10">
        Cargando producto...
      </div>
    );
  }
  return (
    <Card className="p-8">
      <div className="flex justify-between gap-5">
        <CardHeader className="p-0">
          <CardTitle className="text-xl text-blue-950">
            {randomProduct.title}
          </CardTitle>
          {/* <CardDescription className="truncate">
            {productItem.description}
          </CardDescription> */}
        </CardHeader>
        <CardContent className="p-0">
          <img
            className="rounded-md h-36 w-36 object-cover"
            src={randomProduct.images}
            alt=""
          />
        </CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <p>Type: {randomProduct.type}</p>
        <p>Gender: {randomProduct.gender}</p>
      </CardFooter>
    </Card>
  );
};
