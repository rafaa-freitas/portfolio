/// <reference types="vite-plugin-svgr/client" />
import Button from '../Button/Button';
import { Download } from 'lucide-react';
import GithubIcon from '../../assets/github.svg?react';
import NewHeroBackgroundEffect from './HeroBackgroundEffect/NewHeroBackgroundEffect';
import cv from '../../assets/files/rafael_freitas_cv.pdf';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      {/* <HeroBackgroundEffect /> */}
      <NewHeroBackgroundEffect />
      {/* </div> */}
      <section
        className="section-layout flex flex-col justify-center items-center h-screen gap-12"
        id="home"
      >
        <div className="text-white z-10 relative max-w-[840px] text-center">
          <h1>
            <span className="leading-tight block">{t('hero_grettings')}</span>{' '}
            <span className="leading-tight block">
              {t('welcome_message')}
              {/* Bem-vindo(a) ao meu portfólio */}
            </span>
          </h1>
        </div>

        <div className="flex gap-6 z-10 justify-center items-center">
          <Button
            text="Github"
            onClick={() => {}}
            variant="secondary"
            icon={<GithubIcon width={24} height={24} />}
            href="https://github.com/rafaa-freitas"
          ></Button>

          <Button
            text="Download CV"
            href={cv}
            onClick={() => {}}
            icon={<Download color="#0F172A" />}
          ></Button>
        </div>
      </section>
    </>
  );
}

export default Hero;
