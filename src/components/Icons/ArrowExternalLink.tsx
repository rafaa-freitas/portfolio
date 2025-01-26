interface ArrowExternalLinkProps {
  width?: string;
  height?: string;
  className?: string;
}

function ArrowExternalLink({
  width = 'w-6',
  height = 'h-6',
  className,
}: ArrowExternalLinkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`${width} ${height} text-[#fafcfc] ${className}`}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

export default ArrowExternalLink;
