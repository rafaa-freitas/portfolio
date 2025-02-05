import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="section-layout flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col items-center w-3/4 gap-2">
        <h1 className="font-bold ">{t('hero_grettings')}</h1>
        <h2 className="font-normal text-center">{t('about_me_message')}</h2>
      </div>

      <div className="w-3/4 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">{t('about_me_first_title')}</h3>

          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_first_paragraph')}
          </p>
          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_second_paragraph')}
          </p>

          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_third_paragraph')}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">{t('about_me_second_title')}</h3>

          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_fourth_paragraph')}
          </p>
          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_fifth_paragraph')}
          </p>
          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_sixth_paragraph')}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium">{t('about_me_third_title')}</h3>

          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_seventh_paragraph')}
          </p>
          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_eighth_paragraph')}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-lg text-white-text/75 font-inter font-normal">
            {t('about_me_thanks')}
            <br />
            {t('about_me_best_regards')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
