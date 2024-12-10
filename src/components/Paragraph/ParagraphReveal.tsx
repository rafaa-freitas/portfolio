import styles from './ParagraphReveal.module.css';
import Word from './Word/Word';
import { motion, MotionValue } from 'framer-motion';
interface ParagraphRevealProps {
  value: string;
  progress: MotionValue<number>;
}

function ParagraphReveal({ value, progress }: ParagraphRevealProps) {
  const words = value.split(' ');

  return (
    <div className="flex flex-col gap-14 py-20 sticky top-[300px]">
      <p className={styles.paragraph}>
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

      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 291 506"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 377V128C10 77.002 64.502 9.99936 147 10C229.498 10.0006 281 88.502 281 128V377C281 438 227.5 496 147 496C66.5 496 10 438 10 377Z"
          stroke="white"
          strokeWidth="20"
        />
        <motion.rect
          x="125"
          y="-50"
          width="42"
          height="50"
          rx="21"
          fill="#FFF"
          animate={{
            y: [200, 200, 150, 350, 320, 350, 350],

            opacity: [0, 1, 1, 1, 1, 1, 0], // Descendo e dando bounce
          }}
          transition={{
            duration: 3, // Duração do ciclo
            repeat: Infinity,

            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </div>
  );
}

export default ParagraphReveal;
