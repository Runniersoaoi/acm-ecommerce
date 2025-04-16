import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProductItem = ({ images, title, price }) => {
  return (
    <Card className="border-1 p-4">
      <CardHeader className="p-0">
        <div className="flex flex-col gap-4">
          <img
            src={images}
            alt={title}
            className="w-full rounded-md h-80 object-cover"
          />
          <CardTitle className="text-blue-950">{title}</CardTitle>
          <CardDescription>${price}</CardDescription>
        </div>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};
