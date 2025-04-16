import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialsCarrousel = () => {
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beatiful vehicula",
      name: "Davis Dorwart",
      description: "Serial Entrepreneur",
      image:
        "https://demo.nextmerce.com/_next/image?url=%2Fimages%2Fusers%2Fuser-01.jpg&w=64&q=75",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beatiful vehicula",
      name: "Wilson Dias",
      description: "Backend Developer",
      image:
        "https://demo.nextmerce.com/_next/image?url=%2Fimages%2Fusers%2Fuser-04.jpg&w=64&q=75",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beatiful vehicula",
      name: "Davis Dorwart",
      description: "Serial Entrepreneur",
      image:
        "https://demo.nextmerce.com/_next/image?url=%2Fimages%2Fusers%2Fuser-01.jpg&w=64&q=75",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitaeaugue suscipit beatiful vehicula",
      name: "Wilson Dias",
      description: "Backend Developer",
      image:
        "https://demo.nextmerce.com/_next/image?url=%2Fimages%2Fusers%2Fuser-04.jpg&w=64&q=75",
    },
  ];
  return (
    <Carousel className="w-full my-8">
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 flex-col border rounded-xl shadow">
                  <p className="text-lg text-blue-950">
                    {testimonial.testimonial}
                  </p>
                  <div className="flex gap-5 w-full py-5">
                    <div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full h-12"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
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
