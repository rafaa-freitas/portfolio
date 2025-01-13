import EmailCard from './Cards/EmailCard';
import GithubCard from './Cards/GithubCard';
import LinkedinCard from './Cards/LinkedinCard';
import ProjetosCard from './Cards/ProjetosCard';
import SaibaMaisCard from './Cards/SaibaMaisCard';
import ToolboxCard from './Cards/ToolboxCard';
import WhatsappCard from './Cards/WhatsappCard';

function BentoGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-5 lg:grid-rows-5 gap-6 w-[80%]">
      <ProjetosCard />

      <LinkedinCard />

      <GithubCard />

      <EmailCard />

      <WhatsappCard />

      <SaibaMaisCard />

      <ToolboxCard />
    </div>
  );
}

export default BentoGrid;
