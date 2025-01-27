/// <reference types="vite-plugin-svgr/client" />
import About from '../components/About/About';
// import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
// import ToolboxSvg from '../components/IconsWithEffects/ToolboxSvg';
import RevealText from '../components/RevealText/RevealText';
import SelectedWorks from '../components/SelectedWorks/SelectedWorks';
import SocialMedia from '../components/SocialMedia/SocialMedia';

function Home() {
  return (
    <>
      <Hero />
      <RevealText />
      <SelectedWorks />
      <About />
      <SocialMedia />
    </>
  );
}

export default Home;
