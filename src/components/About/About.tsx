import BentoGrid from '../BentoGrid/BentoGrid';

function About() {
  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-2 self-center items-center justify-center max-w-[50%]">
        <h6 className="font-secondary bg-linear-(--color-text-gradient) bg-clip-text text-transparent font-medium tracking-wide">
          ABOUT
        </h6>

        <h3 className="text-white font-primary text-center font-extralight">
          A little about myself and the things I have developed and achieved
        </h3>
      </div>

      <BentoGrid />
    </section>
  );
}

export default About;
