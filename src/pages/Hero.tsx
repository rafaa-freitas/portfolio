/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import Button from '../components/Button/Button';
import { Download } from 'lucide-react';
import GithubIcon from '../assets/github.svg?react';

function Hero() {
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);

  function handleMouseMove(event: MouseEvent) {
    tgX.current = event.clientX;
    tgY.current = event.clientY;
  }

  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(
      `.${styles.interactive}`,
    );
    let animationFrameId: number;

    function move() {
      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;

      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(
          curX.current,
        )}px, ${Math.round(curY.current)}px)`;
      }

      animationFrameId = requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', handleMouseMove);
    move(); // Inicia o loop de animação

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId); // Cancela o loop de animação
    };
  }, []);

  return (
    <section className="section-layout flex flex-col justify-center items-center h-screen gap-12">
      {/* <div className={styles['gradient-bg'] + ' z-0'}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className={styles['gradients-container']}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.interactive}></div>
        </div>
      </div> */}

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
  );
}

export default Hero;
