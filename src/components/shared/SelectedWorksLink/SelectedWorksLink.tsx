import { useTranslation } from 'react-i18next';
import Chip from '../../Chip/Chip';
import ArrowExternalLink from '../../Icons/ArrowExternalLink';
import styles from './SelectedWorksLink.module.css';

interface SelectedWorksLinkProps {
  href: string;
  title: string;
  techs: string[];
  imgSrc: string;
  projectNumber: string;
}

function SelectedWorksLink({
  title,
  href,
  techs,
  imgSrc,
  projectNumber,
}: SelectedWorksLinkProps) {
  const { t } = useTranslation();

  return (
    <a href={href} target="_blank" className="group">
      <div className="py-20 px-8 border border-white/10 rounded-[8px] flex gap-4 bg-white/5 max-xl:flex-col-reverse max-xl:p-8">
        <div className="flex flex-3 max-xl:mt-48 max-md:mt-56">
          <div className="mr-2 mt-1 w-4 group-hover:opacity-0 transition-all duration-500 ease-in-out">
            <span className="font-secondary text-white/50">
              {projectNumber}
            </span>
          </div>

          <div className="flex flex-col gap-4 group-hover:-translate-x-6 transition-all duration-500 ease-in-out">
            <div className={styles['selected-works-link']}>
              <div className="flex gap-2 items-center">
                {' '}
                <h2 className="font-primary tracking-wide text-4xl font-medium group-hover:text-blue-light">
                  {title}
                </h2>
                <ArrowExternalLink width="w-7" height="h-7" className="mt-2" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#fafcfc] text-xs flex-wrap">
              <span className="font-medium font-primary">{t('made_with')}</span>
              {techs.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-2 opacity-0 scale-75 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:scale-100 max-xl:w-1/2 max-lg:w-2/3 max-md:w-full max-xl:left-1/2 max-lg:left-1/3 max-md:left-0 max-xl:opacity-100 max-xl:scale-100">
          <div className="absolute w-full aspect-auto -top-24 max-xl:-top-16 max-xl:-rotate-[2deg] max-md:rotate-0">
            <img
              src={imgSrc}
              alt=""
              className="rounded-[8px] max-w-[434px] max-h-56 border border-white/10 max-xl:max-w-none max-xl:max-h-none"
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default SelectedWorksLink;
