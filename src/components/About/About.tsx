import { useTranslation } from 'react-i18next';
import BentoGrid from '../BentoGrid/BentoGrid';

function About() {
  const { t } = useTranslation();

  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-2 self-center items-center justify-center max-w-[50%]">
        <h6 className="font-secondary bg-linear-(--color-text-gradient) bg-clip-text text-transparent font-medium tracking-wide uppercase">
          {t('about')}
        </h6>

        <h3 className="text-white font-primary text-center font-extralight">
          {t('about_message')}
        </h3>
      </div>

      <BentoGrid />
    </section>
  );
}

export default About;
