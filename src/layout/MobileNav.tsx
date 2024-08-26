import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="z-[100000]">
        <SheetHeader>
          <SheetTitle>
            <div>
              <Link to="/">
                <h1 className="text-3xl font-extrabold">
                  Campus<span>Care</span>
                </h1>
              </Link>
            </div>
          </SheetTitle>
          <ul className="flex flex-col items-start gap-3">
            {navLinks.map((link) => (
              <li key={link.label} className="hover:text-blue-500">
                <NavLink to={link.path}>
                  <SheetClose asChild>
                    <p> {link.label}</p>
                  </SheetClose>
                </NavLink>
              </li>
            ))}
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
