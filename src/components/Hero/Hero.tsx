/// <reference types="vite-plugin-svgr/client" />
import Button from '../Button/Button';
import { Download } from 'lucide-react';
import GithubIcon from '../../assets/github.svg?react';
import HeroBackgroundEffect from './HeroBackgroundEffect/HeroBackgroundEffect';

function Hero() {
  return (
    <>
      <HeroBackgroundEffect />
      <section className="section-layout flex flex-col justify-center items-center h-screen gap-12">
        <div className="text-white z-10 relative max-w-[840px] text-center">
          <h1>
            <span className="leading-tight block">Olá, sou o Rafael!</span>{' '}
            <span className="leading-tight block">
              Bem-vindo(a) ao meu canto da internet
            </span>
          </h1>
        </div>

        <div className="flex gap-6 z-10 justify-center items-center">
          <Button
            text="Github"
            onClick={() => {}}
            variant="secondary"
            icon={<GithubIcon />}
          ></Button>

          <Button
            text="Download CV"
            onClick={() => {}}
            icon={<Download />}
          ></Button>
        </div>
      </section>
    </>
  );
}

export default Hero;
