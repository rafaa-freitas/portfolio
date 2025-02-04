import { useState } from 'react';
import MenuMobile from './MenuMobile';
import { NavLink, useLocation } from 'react-router';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const location = useLocation();
  console.log(location.pathname);

  function toggleIsMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* border-black-light border-b bg-black-normal/60 */}
      <header
        className={
          (isMobileMenuOpen
            ? 'backdrop-blur-lg bg-black-normal '
            : 'backdrop-blur-[4px] bg-linear-(--color-header-gradient) ') +
          'transition-all duration-500 ease-in-out w-full h-20 flex justify-between items-center px-8 py-2 fixed z-50'
        }
      >
        <nav className="flex justify-between items-center w-full">
          <div className="logo max-w-16 min-w-8">
            <NavLink to="/" onClick={handleLogoClick}>
              <img src="./images/logo.svg"></img>
            </NavLink>
          </div>

          <ul className="menu list-none flex max-lg:hidden space-x-4">
            <li>
              <NavLink
                to="/"
                className={
                  (location.pathname == '/'
                    ? 'text-blue-light! opacity-100'
                    : 'opacity-60 ') + 'cursor-pointer font-bold text-xl '
                }
                onClick={handleLogoClick}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={
                  (location.pathname == '/projects'
                    ? 'text-blue-light! opacity-100'
                    : 'opacity-60 ') + 'cursor-pointer font-bold text-xl'
                }
              >
                Projects
              </NavLink>{' '}
            </li>

            <li>
              <NavLink
                to="/about"
                className={
                  (location.pathname == '/about'
                    ? 'text-blue-light! opacity-100'
                    : 'opacity-60 ') + 'cursor-pointer font-bold text-xl'
                }
              >
                About
              </NavLink>
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
