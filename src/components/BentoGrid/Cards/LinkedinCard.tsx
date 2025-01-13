import styles from './Cards.module.css';
import LinkedinCardIcon from './LinkedinCardIcon';

function LinkedinCard() {
  return (
    <div className={styles.card + ' ' + styles['linkedin-card']}>
      <div className="rounded-md">
        <LinkedinCardIcon />
      </div>
    </div>
  );
}

export default LinkedinCard;
