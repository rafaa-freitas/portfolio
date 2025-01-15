import BentoGrid from '../BentoGrid/BentoGrid';

function About() {
  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-2 self-center items-center justify-center max-w-[50%]">
        <h6 className="bg-text-gradient bg-clip-text text-transparent font-medium tracking-wide">
          SOBRE
        </h6>

        <h3 className="text-white font-secondary text-center font-extralight">
          Um pouco sobre mim e as coisas que já desenvolvi e conquistei
        </h3>
      </div>

      <BentoGrid />
    </section>
  );
}

export default About;
