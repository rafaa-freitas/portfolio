import { useTranslation } from 'react-i18next';
import SelectedWorksLink from '../components/shared/SelectedWorksLink/SelectedWorksLink';

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <h2 className="font-bold text-6xl">{t('projects')}</h2>

      <div className="w-full">
        <ul className="list-none flex flex-col gap-8 max-xl:gap-16">
          <li>
            <SelectedWorksLink
              href="https://finance-ai-livid.vercel.app/"
              title="Finance Manager"
              techs={[
                'NextJs',
                'React',
                'Typescript',
                'Prisma',
                'Tailwind',
                'ShadcnUI',
              ]}
              imgSrc="/images/finance_manager_img.jpg"
              projectNumber="01"
            ></SelectedWorksLink>
          </li>

          <li>
            <SelectedWorksLink
              href="https://github.com/rafaa-freitas/plann.er"
              title="Plann.er"
              techs={['React', 'Typescript', 'Tailwind', 'ShadcnUI']}
              imgSrc="/images/planner_img.jpg"
              projectNumber="02"
            ></SelectedWorksLink>
          </li>

          <li>
            <SelectedWorksLink
              href="https://rafaa-freitas.github.io/codebank/"
              title="CodeBank"
              techs={['HTML', 'CSS', 'SaSS', 'Javascript']}
              imgSrc="/images/codebank_img.jpg"
              projectNumber="03"
            />
          </li>

          <li>
            <SelectedWorksLink
              href="https://dogs-react-4a23gl9kp-rafaafreitas-projects.vercel.app/"
              title="Dogs"
              techs={['React', 'CSS', 'SaSS', 'Javascript']}
              imgSrc="/images/dogs_img.jpg"
              projectNumber="04"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
