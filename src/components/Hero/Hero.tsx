/// <reference types="vite-plugin-svgr/client" />
import Button from '../Button/Button';
import { Download } from 'lucide-react';
import GithubIcon from '../../assets/github.svg?react';
import NewHeroBackgroundEffect from './HeroBackgroundEffect/NewHeroBackgroundEffect';
// import HeroBackgroundEffect from './HeroBackgroundEffect/HeroBackgroundEffect';

function Hero() {
  return (
    <>
      {/* <HeroBackgroundEffect /> */}
      <NewHeroBackgroundEffect />
      {/* </div> */}
      <section className="section-layout flex flex-col justify-center items-center h-screen gap-12">
        <div className="text-white z-10 relative max-w-[840px] text-center">
          <h1>
            <span className="leading-tight block">
              Hello, I'm Rafael!
              {/* Olá, sou o Rafael! */}
            </span>{' '}
            <span className="leading-tight block">
              Welcome to my portfolio.
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
          ></Button>

          <Button
            text="Download CV"
            onClick={() => {}}
            icon={<Download color="#0F172A" />}
          ></Button>
        </div>
      </section>
    </>
  );
}

export default Hero;
