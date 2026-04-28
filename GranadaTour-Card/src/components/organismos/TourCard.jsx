import { FunctionComponent } from 'react';
import styles from './TourCard.module.css';

function TourCard() {
  	return (
    		<div className={styles.tourcard}>
      			<img className={styles.cardimageIcon}    src="https://walkingranada.com/wp-content/uploads/2023/01/Alhambra-card-walkin.webp"
        alt="Alhambra" />
      			<div className={styles.cardcontent}>
        				<div className={styles.titulo}>
          					<b className={styles.heading3}>Experiencias</b>
        				</div>
        				<div className={styles.separator} />
        				<div className={styles.carddescription}>
          					<div className={styles.description}>Rutas diferentes, excursiones y<br/>experiencias únicas para<br/>descubrir Granada.</div>
        				</div>
        				<div className={styles.separator} />
      			</div>
      			<div className={styles.cardaction}>
        				<div className={styles.button}>
          					<div className={styles.buttonLabel}>{`Saber más >`}</div>
        				</div>
      			</div>
    		</div>);
};

export default TourCard ;
