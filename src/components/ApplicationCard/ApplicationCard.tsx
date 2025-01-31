interface ApplicationCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  appLink: string;
}

function ApplicationCard({
  imageSrc,
  imageAlt,
  title,
  appLink,
}: ApplicationCardProps) {
  return (
    <a href={appLink} target="_blank">
      <div className="relative flex items-end justify-center row-span-1 col-span-1 rounded-2xl border border-white/20 w-48 h-48 p-4 overflow-hidden group cursor-pointer">
        <div className="absolute w-full h-[50%] bottom-0 bg-gradient-to-t from-[#171F2C] to-[#17202e00] z-10"></div>
        <div className="absolute top-1/2 left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 group-hover:top-[45%] transition-all duration-500 ease-in-out">
          <img src={imageSrc} alt={imageAlt} />
        </div>

        <h5 className="text-white-normal z-10">{title}</h5>
      </div>
    </a>
  );
}

export default ApplicationCard;
