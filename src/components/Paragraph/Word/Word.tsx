import { motion, MotionValue, useTransform } from 'framer-motion';
import styles from '../ParagraphReveal.module.css';

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function Word({ children, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span style={{ opacity: opacity }} className={styles.word}>
      {children}
    </motion.span>
  );
}

export default Word;
