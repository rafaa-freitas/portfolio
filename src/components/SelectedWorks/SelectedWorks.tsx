import Chip from '../Chip/Chip';
import SelectedWorksLink from './components/SelectedWorksLink';

function SelectedWorks() {
  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-2 self-center items-center justify-center max-w-[50%]">
        <h6 className="bg-text-gradient bg-clip-text text-transparent font-medium tracking-wide">
          SELECTED WORKS
        </h6>

        <h3 className="text-white font-secondary text-center font-extralight">
          Melhores projetos que já desenvolvi para praticar
        </h3>
      </div>

      <div className="selected-work-links-container w-full">
        <div className="py-6 flex flex-col gap-4">
          <SelectedWorksLink
            href="https://finance-ai-livid.vercel.app/"
            title="Finance Manager"
          />

          <div className="flex items-center gap-2 text-[#fafcfc] text-xs flex-wrap">
            <span className="font-medium font-secondary">Made with: </span>
            <Chip>NextJs</Chip>
            <Chip>React</Chip>
            <Chip>Typescript</Chip>
            <Chip>Prisma</Chip>
            <Chip>Tailwind</Chip>
            <Chip>ShadcnUI</Chip>
          </div>
        </div>

        <div className="border-[1.5px] border-[white] opacity-10"></div>

        <div className="selected-work-link py-6 flex flex-col gap-4">
          <SelectedWorksLink
            href="https://github.com/rafaa-freitas/plann.er"
            title="Travel Planner"
          />

          <div className="flex items-center gap-2 text-[#fafcfc] text-xs flex-wrap">
            <span className="font-medium font-secondary">Made with: </span>
            <Chip>React</Chip>
            <Chip>Typescript</Chip>
            <Chip>Tailwind</Chip>
            <Chip>ShadcnUI</Chip>
          </div>
        </div>

        <div className="border-[1.5px] border-[white] opacity-10"></div>

        <div className="selected-work-link py-6 flex flex-col gap-4">
          <SelectedWorksLink
            href="https://rafaa-freitas.github.io/codebank/"
            title="CodeBank"
          />

          <div className="flex items-center gap-2 text-[#fafcfc] text-xs flex-wrap">
            <span className="font-medium font-secondary">Made with: </span>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>SaSS</Chip>
            <Chip>Javascript</Chip>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorks;
