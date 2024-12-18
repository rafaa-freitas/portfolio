import ProjetosCard from './Cards/ProjetosCard';

function BentoGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-3 gap-4 w-[80%]">
      <ProjetosCard />

      <div className="bg-[#1b1f2e] border-[1.5px] border-[#353845] hover:border-[#4e515d] col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 order-3 lg:order-none rounded-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        suscipit aliquam.
      </div>

      <div className="bg-[#1b1f2e] border-[1.5px] border-[#353845] hover:border-[#4e515d] col-span-1 row-span-2 lg:col-span-1 lg:row-span-3 order-2 lg:order-none rounded-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem in
        voluptates animi omnis
      </div>

      <div className="bg-[#1b1f2e] border-[1.5px] border-[#353845] hover:border-[#4e515d] col-span-1 row-span-1 lg:col-span-2 lg:row-span-1 order-4 lg:order-none rounded-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut officiis
        ipsam fuga
      </div>
    </div>
  );
}

export default BentoGrid;
