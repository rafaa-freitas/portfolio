import Header from './components/Header';
import RevealText from './components/RevealText/RevealText';
import Hero from './pages/Hero';
import { useRef, useState } from 'react';
import ProjectSvg from './components/IconEffects/ProjectSvg';
import { SquareArrowOutUpRight } from 'lucide-react';

function App() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setCursorPosition({ x, y });
    }
  };
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <RevealText></RevealText>
      <section className="section-layout flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col gap-2 self-center items-center justify-center max-w-[50%]">
          <h2 className="text-blue-light font-medium tracking-wide">ABOUT</h2>

          <p className="text-white text-4xl font-secondary text-center">
            Um pouco sobre mim e as coisas que já desenvolvi e conquistei
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-3 gap-4 w-[80%]">
          <div
            className="bg-[#1b1f2e] border-[1.5px] duration-200 transition-all border-[#353845] hover:border-[#4e515d] col-span-2 row-span-2 lg:col-span-2 lg:row-span-3 order-1 lg:order-none rounded-lg stroke-[1] flex justify-end items-stretch relative bg-projetos-card bg-cover bg-no-repeat overflow-clip flex-col group cursor-pointer"
            onMouseMove={(event) => handleMouseMove(event)}
            onMouseLeave={() => setIsMouseOnCard(false)}
            onMouseEnter={() => setIsMouseOnCard(true)}
            ref={cardsRef}
          >
            <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-[#171F2C] to-[#17202e12] z-10"></div>
            <div className="flex-1 w-full h-full absolute z-0">
              <div className="icons-container h-[100%]">
                <ProjectSvg
                  cardsRef={cardsRef}
                  cursorPosition={cursorPosition}
                  mouseOnCard={isMouseOnCard}
                />
              </div>
            </div>
            <div className="flex items-start p-6 text-white z-10 relative">
              <h4 className="font-medium text-2xl">Projetos</h4>

              <div className="flex items-center justify-center right-6 top-0 bottom-0 absolute">
                <SquareArrowOutUpRight
                  className="w-4 h-5 
                 opacity-0 group-hover:opacity-100 
                 -translate-y-6 group-hover:translate-y-0 
                 transition-all duration-300 delay-200"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#1b1f2e] border-[1.5px] border-[#353845] hover:border-[#4e515d] col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 order-3 lg:order-none rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            suscipit aliquam.
          </div>

          <div className="bg-[#1b1f2e] border-[1.5px] border-[#353845] hover:border-[#4e515d] col-span-1 row-span-2 lg:col-span-1 lg:row-span-3 order-2 lg:order-none rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            in voluptates animi omnis
          </div>

          <div className="bg-[#1b1f2e] border-[1.5px] border-[#353845] hover:border-[#4e515d] col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 order-4 lg:order-none rounded-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            officiis ipsam fuga
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
