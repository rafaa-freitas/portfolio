// import LinkedinCardIcon from '../BentoGrid/Cards/LinkedinCardIcon';
/// <reference types="vite-plugin-svgr/client" />
// import ArrowExternalLink from '../../assets/arrow-external-link.svg?react';
import LinkedinIcon from '../../assets/linkedin_social_media.svg?react';
import GithubIcon from '../../assets/github_social_media.svg?react';
import AtSignIcon from '../../assets/at_sign_social_media.svg?react';
import WhatsAppIcon from '../../assets/whatsapp.svg?react';
import ResumeIcon from '../../assets/resume.svg?react';
import ArrowExternalLink from '../Icons/ArrowExternalLink';
import styles from './SocialMedia.module.css';

function SocialMedia() {
  return (
    <>
      <div className="border-[1.5px] border-[white] opacity-10"></div>
      <section className="section-layout">
        <div className="flex gap-4 justify-center flex-wrap">
          <div className={styles['social-media-link-container']}>
            {' '}
            <LinkedinIcon />
            <div className="flex justify-start items-center">
              <h6 className={styles['social-media-link']}>Linkedin</h6>
              <ArrowExternalLink />
            </div>
          </div>

          <div className={styles['social-media-link-container']}>
            {' '}
            <GithubIcon width={36} height={36} />
            <div className="flex justify-start items-center">
              <h6 className={styles['social-media-link']}>Github</h6>
              <ArrowExternalLink />
            </div>
          </div>

          <div className={styles['social-media-link-container']}>
            {' '}
            <AtSignIcon />
            <div className="flex justify-start items-center">
              <h6 className={styles['social-media-link']}>Email</h6>
              <ArrowExternalLink />
            </div>
          </div>

          <div className={styles['social-media-link-container']}>
            {' '}
            <WhatsAppIcon />
            <div className="flex justify-start items-center">
              <h6 className={styles['social-media-link']}>WhatsApp</h6>
              <ArrowExternalLink />
            </div>
          </div>

          <div className={styles['social-media-link-container']}>
            {' '}
            <ResumeIcon />
            <div className="flex justify-start items-center">
              <h6 className={styles['social-media-link']}>Currículo</h6>
              <ArrowExternalLink />
            </div>
          </div>

          {/* 
       
         
          <h6>Resume.pdf</h6> */}
        </div>
      </section>
      <div className="border-[1.5px] border-[white] opacity-10"></div>
    </>
  );
}

export default SocialMedia;
