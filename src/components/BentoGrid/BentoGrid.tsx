import ProjetosCard from './Cards/ProjetosCard';
import SaibaMaisCard from './Cards/SaibaMaisCard';
import ToolboxCard from './Cards/ToolboxCard';

function BentoGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-5 lg:grid-rows-5 gap-6 w-full min-h-[520px]">
      <ProjetosCard />

      <SaibaMaisCard />

      <ToolboxCard />
    </div>
  );
}

export default BentoGrid;
