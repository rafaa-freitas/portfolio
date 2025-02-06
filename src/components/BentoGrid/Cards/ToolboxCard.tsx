import { SquareArrowOutUpRight } from 'lucide-react';
import ToolboxSvg from '../../CardsBackground/ToolboxSvg';
import { useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

function ToolboxCard() {
  const { t } = useTranslation();

  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={'card toolbox-card group'}
    >
      <div className="absolute w-full h-[50%] bottom-0 bg-linear-to-t from-[#171f2c] to-[#ffffff00] z-10"></div>

      <div className="flex-1 w-full h-full absolute z-0">
        <div className="icons-container h-[100%]">
          <ToolboxSvg hover={isHover} />
        </div>
      </div>

      <Link to="/toolbox" className="z-10 h-full flex items-end">
        <div className="flex items-start p-6 relative w-full">
          <h4 className="font-normal text-2xl">{t('techs_tools')}</h4>

          <div className="flex items-center justify-center right-6 top-0 bottom-0 absolute">
            <SquareArrowOutUpRight
              className={
                'external-link-icon group-hover:opacity-100  group-hover:translate-y-[1px]'
              }
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ToolboxCard;
