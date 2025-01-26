interface ChipProps {
  children: React.ReactNode;
  background?: string;
  color?: string;
}

function Chip({
  children,
  background = 'bg-[#6FB1FF]/10',
  color = 'text-[#6FB1FF]',
}: ChipProps) {
  return (
    <div
      className={`rounded-full py-1 px-3 leading-5 flex items-center font-medium font-secondary ${background} ${color}`}
    >
      {children}
    </div>
  );
}

export default Chip;
