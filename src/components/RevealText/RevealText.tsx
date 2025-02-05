import { useScroll } from 'motion/react';
import ParagraphReveal from '../Paragraph/ParagraphReveal';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

function RevealText() {
  const { t } = useTranslation();

  // const paragraph =
  //   'Sou desenvolvedor front-end com paixão por design, sempre explorando novas ideias e soluções criativas. No mundo do desenvolvimento web, é onde libero minha criatividade e busco evoluir constantemente.';

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={sectionRef}
      className="section-layout z-10 h-[3400px] overflow-visible! max-md:hidden"
    >
      <ParagraphReveal
        value={t('reveal_text')}
        progress={scrollYProgress}
      ></ParagraphReveal>
    </section>
  );
}

export default RevealText;
