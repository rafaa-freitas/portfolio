import styles from './Cards.module.css';
import WhatsappCardIcon from './WhatsappCardIcon';

function WhatsappCard() {
  return (
    <div className={styles.card + ' ' + styles['whatsapp-card']}>
      <div className="rounded-md">
        <WhatsappCardIcon />
      </div>
    </div>
  );
}

export default WhatsappCard;
