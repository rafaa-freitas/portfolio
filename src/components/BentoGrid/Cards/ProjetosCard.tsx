import React, { useRef, useState } from 'react';
import ProjectSvg from '../../CardsBackground/ProjectSvg';
import { SquareArrowOutUpRight } from 'lucide-react';
import styles from './Cards.module.css';
import { Link } from 'react-router';

function ProjetosCard() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setCursorPosition({ x, y });
    }
  };

  return (
    <div
      className={styles.card + ' ' + styles['projetos-card'] + ' ' + 'group'}
      onMouseMove={(event) => handleMouseMove(event)}
      onMouseLeave={() => setIsMouseOnCard(false)}
      onMouseEnter={() => setIsMouseOnCard(true)}
      ref={cardsRef}
    >
      <div className="absolute w-full h-[50%] bottom-0 bg-linear-to-t from-[#171F2C] to-[#17202e12] z-10"></div>
      <div className="flex-1 w-full h-full absolute z-0">
        <div className="icons-container h-[100%]">
          <ProjectSvg
            cardsRef={cardsRef}
            cursorPosition={cursorPosition}
            mouseOnCard={isMouseOnCard}
          />
        </div>
      </div>

      <Link to="/projects" className="z-10 h-full flex items-end">
        <div className="flex items-start p-6 relative w-full">
          <h4 className="font-normal text-2xl">All Projects</h4>

          <div className="flex items-center justify-center right-6 top-0 bottom-0 absolute">
            <SquareArrowOutUpRight
              className={
                styles['external-link-icon'] +
                ' ' +
                'group-hover:opacity-100  group-hover:translate-y-[1px]'
              }
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjetosCard;
