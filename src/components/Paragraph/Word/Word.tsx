import { motion, MotionValue, useTransform } from 'framer-motion';
import styles from '../ParagraphReveal.module.css';
import Character from '../Character/Character';

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function Word({ children, range, progress }: WordProps) {
  const characters = children.split('');
  const step = (range[1] - range[0]) / characters.length;
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span style={{ opacity: opacity }} className={styles.word}>
      {children}
    </motion.span>
  );

  return (
    <span className={styles.word}>
      {characters.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);

        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
}

export default Word;
