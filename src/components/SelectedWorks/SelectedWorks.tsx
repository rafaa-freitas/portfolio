import { useTranslation } from 'react-i18next';
import SelectedWorksLink from '../shared/SelectedWorksLink/SelectedWorksLink';

function SelectedWorks() {
  const { t } = useTranslation();

  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-2 self-center items-center justify-center max-w-[50%]">
        <h6 className="font-secondary bg-linear-(--color-text-gradient) bg-clip-text text-transparent font-medium tracking-wide uppercase">
          {t('projects_highlight')}
        </h6>

        <h3 className="text-white font-primary text-center font-extralight">
          {t('projects_highlight_message')}
        </h3>
      </div>

      <div className="w-full">
        <ul className="list-none flex flex-col gap-8 max-xl:gap-16">
          <li>
            <SelectedWorksLink
              href="https://finance-manager-livid.vercel.app/"
              title="Finance Manager"
              techs={[
                'NextJs',
                'React',
                'Typescript',
                'Prisma',
                'Tailwind',
                'ShadcnUI',
              ]}
              imgSrc="/images/finance_manager_img.png"
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
        </ul>
      </div>
    </section>
  );
}

export default SelectedWorks;
