import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="#">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a
                href={navLink.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {navLink.label}
              </a>
            </li>
          ))}
          <li className="font-montserrat leading-normal text-lg font-medium text-slate-800">
            <a
             href="#"
             className="hover:text-orange-500 ease-in duration-300"
            >
            Sign in/Explore Now
            </a>
          </li>
        </ul>

        <div className="lg:hidden">
            <img
             src={hamburger}
             alt="hamburger" 
             width={25}
             height={25}
             
             />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
