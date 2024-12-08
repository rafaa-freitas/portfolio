interface MenuMobileProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function MenuMobile({ isOpen, toggleMenu }: MenuMobileProps) {
  return (
    <div className="relative">
      <div
        className={`menu-mobile w-full fixed inset-0 bg-black-normal/40 backdrop-blur-lg transition-all duration-500 ease-in-out mt-20 z-50 ${
          !isOpen ? '-left-full' : ''
        }`}
      >
        <ul className="nav-mobile mt-4">
          <li onClick={toggleMenu}>
            <a
              href="#"
              className="link-menu-mobile text-4xl font-bold text-[#89a9d7] hover:text-white hover:opacity-1"
            >
              Sobre
            </a>
          </li>

          <li onClick={toggleMenu}>
            <a href="#" className="link-menu-mobile text-4xl font-bold">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;
