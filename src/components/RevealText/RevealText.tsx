import { useScroll } from 'motion/react';
import ParagraphReveal from '../Paragraph/ParagraphReveal';
import { useRef } from 'react';

function RevealText() {
  const paragraph =
    'Sou um desenvolvedor front-end com entusiasmo por design, sempre explorando novas ideias e soluções criativas. O universo do desenvolvimento web é onde libero minha criatividade, buscando constantemente aprimorar minhas habilidades.';

  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.1'],
  });

  return (
    <section ref={element} className="section-layout z-10 h-[3000px]">
      <ParagraphReveal
        value={paragraph}
        progress={scrollYProgress}
      ></ParagraphReveal>
    </section>
  );
}

export default RevealText;
