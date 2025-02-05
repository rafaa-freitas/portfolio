import ApplicationCard from '../components/ApplicationCard/ApplicationCard';
import TechCard from '../components/TechCard/TechCard';
import { useTranslation } from 'react-i18next';

function Toolbox() {
  const { t } = useTranslation();

  return (
    <section className="section-layout flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col items-center w-3/4 gap-2">
        <h1 className="font-bold">{t('techs_tools')}</h1>
      </div>

      <div className="flex flex-col gap-6 items-center h-min">
        <h3 className="font-light">{t('techs')}</h3>

        <div className="grid grid-rows-2 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 w-auto h-auto">
          <TechCard
            imageAlt="HTML 5"
            imageSrc="./images/html_card.png"
            title="HTML 5"
            techLink="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
          />

          <TechCard
            imageAlt="CSS 3"
            imageSrc="./images/css_card.png"
            title="CSS 3"
            techLink="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          />

          <TechCard
            imageAlt="Sass"
            imageSrc="./images/sass_card.png"
            title="Sass"
            techLink="https://sass-lang.com/"
          />

          <TechCard
            imageAlt="Tailwind"
            imageSrc="./images/tailwind_card.png"
            title="Tailwind"
            techLink="https://tailwindcss.com/"
          />

          <TechCard
            imageAlt="Bootstrap"
            imageSrc="./images/bootstrap_card.png"
            title="Bootstrap"
            techLink="https://getbootstrap.com/"
          />

          <TechCard
            imageAlt="Javascript"
            imageSrc="./images/js_card.png"
            title="Javascript"
            techLink="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
          />

          <TechCard
            imageAlt="Typescript"
            imageSrc="./images/ts_card.png"
            title="Typescript"
            techLink="https://www.typescriptlang.org/"
          />

          <TechCard
            imageAlt="React"
            imageSrc="./images/react_card.png"
            title="React"
            techLink="https://react.dev/"
          />

          <TechCard
            imageAlt="NextJs"
            imageSrc="./images/next_card.png"
            title="NextJs"
            techLink="https://nextjs.org/"
          />

          <TechCard
            imageAlt="Angular"
            imageSrc="./images/angular_card.png"
            title="Angular"
            techLink="https://angular.dev/"
          />

          <TechCard
            imageAlt="Dart"
            imageSrc="./images/dart_card.png"
            title="Dart"
            techLink="https://dart.dev/"
          />

          <TechCard
            imageAlt="Flutter"
            imageSrc="./images/flutter_card.png"
            title="Flutter"
            techLink="https://flutter.dev/"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center h-min">
        <h3 className="font-light">{t('tools')}</h3>

        <div className="grid grid-rows-2 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 w-auto h-auto">
          <ApplicationCard
            imageAlt="Figma"
            imageSrc="./images/vscode_card.png"
            title="Vs Code"
            appLink="https://code.visualstudio.com/"
          />

          <ApplicationCard
            imageAlt="Figma"
            imageSrc="./images/figma_card.png"
            title="Figma"
            appLink="https://www.figma.com"
          />

          <ApplicationCard
            imageAlt="Figma"
            imageSrc="./images/notion_card.png"
            title="Notion"
            appLink="https://www.notion.com/"
          />

          <ApplicationCard
            imageAlt="Figma"
            imageSrc="./images/spotify_card.png"
            title="Spotify"
            appLink="https://open.spotify.com/"
          />

          <ApplicationCard
            imageAlt="Figma"
            imageSrc="./images/brave_card.png"
            title="Brave"
            appLink="https://brave.com/"
          />

          <ApplicationCard
            imageAlt="Figma"
            imageSrc="./images/obsidian_card.png"
            title="Obsidian"
            appLink="https://obsidian.md/"
          />
        </div>
      </div>
    </section>
  );
}

export default Toolbox;
