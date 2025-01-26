import ArrowExternalLink from '../../Icons/ArrowExternalLink';
import styles from './SelectedWorksLink.module.css';

interface SelectedWorksLinkProps {
  href: string;
  title: string;
}

function SelectedWorksLink({ href, title }: SelectedWorksLinkProps) {
  return (
    <a href={href} target="_blank" className={styles['selected-works-link']}>
      <div className="flex gap-2 items-center">
        {' '}
        <h2 className="font-secondary tracking-wide text-4xl">{title}</h2>
        <ArrowExternalLink width="w-7" height="h-7" className="mt-2" />
      </div>
    </a>
  );
}

export default SelectedWorksLink;
