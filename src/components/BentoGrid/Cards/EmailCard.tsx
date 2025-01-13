import styles from './Cards.module.css';
import EmailCardIcon from './EmailCardIcon';

function EmailCard() {
  return (
    <div className={styles.card + ' ' + styles['email-card']}>
      <div className="rounded-md">
        <EmailCardIcon />
      </div>
    </div>
  );
}

export default EmailCard;
