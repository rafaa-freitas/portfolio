import { motion, MotionValue } from 'framer-motion';
import { useTransform } from 'motion/react';

interface CharacterProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function Character({ children, range, progress }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return <motion.span style={{ opacity: opacity }}>{children}</motion.span>;
}

export default Character;
