import ApplicationCard from '../components/ApplicationCard/ApplicationCard';

function Toolbox() {
  return (
    <section className="section-layout flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col items-center w-3/4 gap-2">
        <h1 className="font-bold">
          Hardware and software I use (almost) every day.
        </h1>
      </div>

      <div className="flex flex-col gap-6 items-center h-min">
        <h3 className="font-light">Applications</h3>

        <div className="grid grid-rows-2 grid-cols-3 gap-4 w-auto h-auto">
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

      {/* <div className="">
        <h3 className="font-light">Hardware</h3>
      </div> */}
    </section>
  );
}

export default Toolbox;
