import Chip from '../components/Chip/Chip';
import SelectedWorksLink from '../components/shared/SelectedWorksLink/SelectedWorksLink';

function Projects() {
  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <h2 className="font-bold text-6xl">Projects</h2>

      <div className="w-full">
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

        <div className="border-[1.5px] border-[white] opacity-10"></div>

        <div className="selected-work-link py-6 flex flex-col gap-4">
          <SelectedWorksLink
            href="https://blog-react-taupe.vercel.app/"
            title="Blog"
          />

          <div className="flex items-center gap-2 text-[#fafcfc] text-xs flex-wrap">
            <span className="font-medium font-secondary">Made with: </span>
            <Chip>React</Chip>
            <Chip>Typescript</Chip>
            <Chip>Tailwind</Chip>
            <Chip>JSON Server</Chip>
          </div>
        </div>

        <div className="border-[1.5px] border-[white] opacity-10"></div>

        <div className="selected-work-link py-6 flex flex-col gap-4">
          <SelectedWorksLink
            href="https://dogs-react-4a23gl9kp-rafaafreitas-projects.vercel.app/"
            title="Dogs"
          />

          <div className="flex items-center gap-2 text-[#fafcfc] text-xs flex-wrap">
            <span className="font-medium font-secondary">Made with: </span>
            <Chip>React</Chip>
            <Chip>CSS</Chip>
            <Chip>SaSS</Chip>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
