import { useRef } from 'react';
import { useScroll } from 'framer-motion';

function RevealText() {
  const element = useRef<HTMLParagraphElement | null>(null);
  return (
    <section className="section-layout">
      <p className="text-white font-secondary text-2xl" ref={element}>
        Testando o texto com highlight on scroll
      </p>
    </section>
  );
}

export default RevealText;
