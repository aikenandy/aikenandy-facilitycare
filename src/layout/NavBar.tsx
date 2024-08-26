import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { ModeToggle } from "@/theme/mode-toggle";
import { MobileNav } from ".";

export const NavBar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-5 py-3 font-semibold">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-extrabold">
              Campus<span>Care</span>
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-3">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="hidden sm:inline-flex hover:text-blue-500"
            >
              <NavLink to={link.path}>{link.label}</NavLink>
            </li>
          ))}
        
            <MobileNav />
          
          <div>
            <ModeToggle />
          </div>
        </ul>
      </nav>
    </header>
  );
};
