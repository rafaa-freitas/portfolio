import { useState } from 'react';
import MenuMobile from './MenuMobile';
import { NavLink, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isOn, setIsOn] = useState(true);

  const location = useLocation();
  console.log(location.pathname);

  function toggleIsMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleChangeLanguage() {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
    setIsOn(!isOn);
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
          'transition-all duration-500 ease-in-out w-full h-20 flex justify-between items-center px-8 py-2 fixed z-50 gap-4'
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
                {t('projects')}
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
                {t('about')}
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          onClick={handleChangeLanguage}
          className={`min-w-[72px] max-lg:mr-8 h-8 flex items-center justify-between rounded-full p-2 ease-in-out cursor-pointer ${
            isOn ? 'bg-[#6DA544]/40!' : 'bg-[#D80027]/40!'
          }`}
        >
          <div
            className={`w-5 h-5 bg-center bg-cover rounded-full shadow-md transition-all transform duration-500 ease-in-out ${
              isOn
                ? 'translate-x-8 bg-[url(/images/brazil.png)]'
                : 'translate-x-0 bg-[url(/images/eua.png)]'
            }`}
          />

          <span
            className={`font-bold mr-1 transform duration-500 ease-in-out ${
              isOn ? '-translate-x-7' : 'translate-x-0'
            }`}
          >
            {i18n.language === 'en' ? 'EN' : 'BR'}
          </span>
        </button>

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
