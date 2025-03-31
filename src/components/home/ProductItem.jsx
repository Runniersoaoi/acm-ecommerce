import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProductItem = () => {
  return (
    <Card>
      <CardHeader>
        <img
          src="https://demo.nextmerce.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frpq7htxl%2Fproduction%2Fe5c57afcfb88cd4f47f0b7b177669b7489b2b4cb-570x512.png&w=256&q=75"
          alt=""
        />
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
