import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export const PathSection = () => {
  return (
    <div className="flex justify-between items-center mx-auto w-full p-4 py-10 max-w-[1200px]">
      <h1 className="text-3xl font-bold text-blue-950">
        Explora todos los productos
      </h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/home" className="font-medium text-lg">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-lg text-blue-800">
              Productos
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
