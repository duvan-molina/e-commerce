import { useState } from "react";
import Link from "next/link";
import { Menu } from "@styled-icons/boxicons-regular";

import ContainerComponent from "@shared/components/Container";

const Header: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <ContainerComponent>
        <nav className="flex flex-wrap items-center justify-between w-full py-4">
          <h1 className="text-main font-dancing font-bold text-2xl">
            <Link href="/">
              <a>StyleShop</a>
            </Link>
          </h1>

          <button
            onClick={handleClick}
            className="h-6 w-6 cursor-pointer md:hidden block"
          >
            <Menu size={30} color="#4b4b4b" />
          </button>
          <div
            className={[
              "w-full md:flex md:items-center md:w-auto",
              !isMenuOpen ? "hidden" : "",
            ].join(" ")}
          >
            <ul
              className="
              pt-4
              text-center
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li className="md:p-4 py-2">
                <Link href="/productos">
                  <a>Productos</a>
                </Link>
              </li>
              <li className="md:p-4 py-2">
                <Link href={`/productos?search=ofertas`} passHref>
                  <a>Offertas</a>
                </Link>
              </li>
              <li className="md:p-4 py-2">Contacto</li>
            </ul>
          </div>
        </nav>
      </ContainerComponent>
    </header>
  );
};

export default Header;
