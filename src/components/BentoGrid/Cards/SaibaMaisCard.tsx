import { SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

function SaibaMaisCard() {
  const { t } = useTranslation();

  return (
    <div className={'card saiba-mais-card min-h-[350px] relative group'}>
      <div className="absolute w-full h-[50%] bottom-0 bg-linear-to-t from-[#171F2C] to-[#ffffff00] z-10"></div>

      <div className="absolute h-full">
        <img
          src="./images/saiba_mais.jpg"
          alt="Saiba mais"
          className="w-full h-full! object-cover"
        />
      </div>

      <Link to="/about" className="z-10 h-full flex items-end">
        <div className="flex items-start p-6 z-10 relative w-full">
          <h4 className="font-normal text-2xl flex-1">{t('about_me')}</h4>

          <div className="flex flex-3 items-center justify-center right-6 top-0 bottom-0 absolute">
            <SquareArrowOutUpRight
              className={
                'external-link-icon group-hover:opacity-100 group-hover:translate-y-[1px]'
              }
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SaibaMaisCard;
