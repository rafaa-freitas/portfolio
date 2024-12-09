import { useRef } from 'react';
import styles from './ParagraphReveal.module.css';
import Word from './Word/Word';
import { MotionValue } from 'framer-motion';

interface ParagraphRevealProps {
  value: string;
  progress: MotionValue<number>;
}

function ParagraphReveal({ value, progress }: ParagraphRevealProps) {
  const element = useRef(null);
  const words = value.split(' ');

  return (
    <p className={styles.paragraph} ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;

        return (
          <Word key={i} range={[start, end]} progress={progress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default ParagraphReveal;
