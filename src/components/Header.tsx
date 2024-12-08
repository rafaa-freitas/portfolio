import { useState } from 'react';
import MenuMobile from './MenuMobile';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function toggleIsMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <header className="w-full border-black-light border-b h-20 flex justify-between items-center px-8 py-2 fixed z-50 bg-black-normal/40 backdrop-blur-[6px]">
        <nav className="flex justify-between items-center w-full">
          <div className="logo max-w-16 min-w-8">
            <img src="./images/logo.svg"></img>
          </div>

          <ul className="menu list-none flex max-lg:hidden space-x-4">
            <li>
              <a className="cursor-pointer font-bold text-xl">Sobre</a>
            </li>
            <li>
              {' '}
              <a className="cursor-pointer font-bold text-xl">Contato</a>
            </li>
          </ul>
        </nav>

        <div
          className={`bx ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleIsMobileMenuOpen}
        ></div>
      </header>

      <MenuMobile
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleIsMobileMenuOpen}
      ></MenuMobile>
    </>
  );
}

export default Header;
