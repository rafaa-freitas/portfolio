import Header from './components/Header';
import RevealText from './components/RevealText/RevealText';
import Hero from './pages/Hero';
import styles from './pages/Hero.module.css';

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles['gradient-bg'] + ' -z-10'}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className={styles['gradients-container']}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.g6}></div>
          <div className={styles.g7}></div>
        </div>
      </div>
      <Hero></Hero>
      <RevealText></RevealText>
      <div className="h-[1000px]"></div>
    </>
  );
}

export default App;
