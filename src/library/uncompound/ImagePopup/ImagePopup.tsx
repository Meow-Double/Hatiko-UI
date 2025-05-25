import styles from './ImagePopup.module.css';

interface ImagePopupProps {
  images: any[];
}

export const ImagePopup = (props: ImagePopupProps) => {
  const { images } = props;

  return (
    <div className={styles.overlay}>
      <ul className={styles.menu}>
        {images.map((image) => (
          <li key={image} className={styles.item}>
            <img className={styles.img} src={image} alt='picture' />
          </li>
        ))}
      </ul>
    </div>
  );
};