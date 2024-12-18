import { useScroll } from 'motion/react';
import ParagraphReveal from '../Paragraph/ParagraphReveal';
import { useRef } from 'react';

function RevealText() {
  const paragraph =
    'Sou um desenvolvedor front-end com entusiasmo por design, sempre explorando novas ideias e soluções criativas. O universo do desenvolvimento web é onde libero minha criatividade, buscando constantemente aprimorar minhas habilidades.';

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={sectionRef}
      className="section-layout z-10 h-[3400px] !overflow-visible"
    >
      <ParagraphReveal
        value={paragraph}
        progress={scrollYProgress}
      ></ParagraphReveal>
    </section>
  );
}

export default RevealText;
