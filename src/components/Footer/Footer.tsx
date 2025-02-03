import Logo from '../../assets/logo.svg?react';
import Divider from '../Divider/Divider';

function Footer() {
  return (
    <>
      <Divider />

      <div className="section-layout !py-8 flex justify-between flex-wrap gap-6">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <h5 className="font-light text-[#EDEFF0] text-nowrap">
              Rafael Freitas
            </h5>
            <Logo width={36} height={40} />
          </div>

          <p className="text-[#9FA5B0] text-base font-primary font-light opacity-70">
            All rights reserved®
          </p>
        </div>

        <div className="flex flex-col text-[#9FA5B0] justify-center">
          <p className="font-primary font-light opacity-70">
            Portfolio Rafael Freitas ® 2025
          </p>
          <p className="font-primary font-light opacity-70">
            by: Rafael Freitas
          </p>
          <p className="font-primary font-light opacity-70">
            rafael.freitasfa@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
