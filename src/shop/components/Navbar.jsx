import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavigationMenu className=" h-20 font-semibold  border-b-1 flex justify-center">
      <NavigationMenuList className="flex gap-4 text-sm min-w-[1200px] justify-start">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-md">
            <Link to="/">
              <img
                src="https://demo.nextmerce.com/images/logo/logo.svg"
                alt=""
              />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-md text-primary-blue">
            <Link to="/products">Productos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-md">
            <Link to="/contact">Contacto</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-md">
            <Link to="/cart">Carrito</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-md">
            <Link to="/wishlist">Lista de deseos</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
