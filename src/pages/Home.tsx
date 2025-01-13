/// <reference types="vite-plugin-svgr/client" />
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
// import ToolboxSvg from '../components/IconsWithEffects/ToolboxSvg';
import RevealText from '../components/RevealText/RevealText';

function Home() {
  return (
    <>
      <Hero />
      <RevealText />
      <About />
      {/* <ToolboxSvg /> */}
    </>
  );
}

export default Home;
