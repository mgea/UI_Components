/*** TourCardProps - Crear una card parametrizado con prop. basada en TourCard */

import styles from './TourCard.module.css';

function TourCardProps({
  title,
  description,
  image,
  buttonText = "Saber más >",
}) {
  return (
    <div className={styles.tourcard}>
      
      <img
        className={styles.cardimageIcon}
        src={image}
        alt={title}
      />

      <div className={styles.cardcontent}>
        
        <div className={styles.titulo}>
          <b className={styles.heading3}>{title}</b>
        </div>

        <div className={styles.separator} />

        <div className={styles.carddescription}>
          <div className={styles.description}>
            {description}
          </div>
        </div>

        <div className={styles.separator} />

      </div>

      <div className={styles.cardaction}>
        <div className={styles.button}>
          <div className={styles.buttonLabel}>
            {buttonText}
          </div>
        </div>
      </div>

    </div>
  );
}

export default TourCardProps;