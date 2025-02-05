import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router';

interface MenuMobileProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function MenuMobile({ isOpen, toggleMenu }: MenuMobileProps) {
  const { t } = useTranslation();

  const location = useLocation();

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        className={`menu-mobile w-full fixed inset-0 bg-black-normal backdrop-blur-lg transition-all duration-500 ease-in-out mt-20 z-50 ${
          !isOpen ? '-left-full' : ''
        }`}
      >
        <ul className="nav-mobile mt-4">
          <li onClick={toggleMenu}>
            <NavLink
              to="/"
              className={
                (location.pathname == '/'
                  ? 'text-blue-light! opacity-100'
                  : 'opacity-60 ') +
                ' link-menu-mobile cursor-pointer font-bold text-4xl '
              }
              onClick={handleLogoClick}
            >
              Home
            </NavLink>
          </li>

          <li onClick={toggleMenu}>
            <NavLink
              to="/projects"
              className={
                (location.pathname == '/projects'
                  ? 'text-blue-light! opacity-100'
                  : 'opacity-80 ') +
                ' link-menu-mobile cursor-pointer font-bold text-4xl '
              }
            >
              {t('projects')}
            </NavLink>
          </li>

          <li onClick={toggleMenu}>
            <NavLink
              to="/about"
              className={
                (location.pathname == '/about'
                  ? 'text-blue-light! opacity-100'
                  : 'opacity-80 ') +
                ' link-menu-mobile cursor-pointer font-bold text-4xl '
              }
            >
              {t('about')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;
