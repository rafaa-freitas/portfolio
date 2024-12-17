/// <reference types="vite-plugin-svgr/client" />
import Button from '../components/Button/Button';
import { Download } from 'lucide-react';
import GithubIcon from '../assets/github.svg?react';
import HeroBackgroundEffect from '../components/HeroBackgroundEffect/HeroBackgroundEffect';

function Hero() {
  return (
    <>
      <HeroBackgroundEffect />
      <section className="section-layout flex flex-col justify-center items-center h-screen gap-12">
        <div className="text-white z-10 relative text-6xl font-extrabold max-w-[840px] text-center">
          <p className="leading-tight">Olá, sou o Rafael!</p>
          <p className="leading-tight">Bem-vindo(a) ao meu canto da internet</p>
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
