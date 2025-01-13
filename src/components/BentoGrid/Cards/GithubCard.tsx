import styles from './Cards.module.css';
import GithubCardIcon from './GithubCardIcon';
// import GithubCardIcon from '../../../assets/github-card.svg?react';

function GithubCard() {
  return (
    <div className={styles.card + ' ' + styles['github-card']}>
      <div className="rounded-md">
        <GithubCardIcon />
      </div>
    </div>
  );
}

export default GithubCard;
