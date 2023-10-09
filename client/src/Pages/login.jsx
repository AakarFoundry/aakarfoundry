import logo from "../assets/img/Logo.png";
import hexagons from "../assets/img/login_hexagons@2x.png";
import cloud from "../assets/img/login_cloud-storage.png"
import styles from "../assets/styles/Login.module.css";
export const Login = () => {
  return (
    <div className={styles.frameLogin}>
      <div className={styles.div}>
      <img className={styles.image} alt="Logo" src={logo} />
        <div className={styles.overlap}>
          <img className={styles.hexagons} alt="Hexagons" src={hexagons} />
          <img className={styles.cloudStorageImage} alt="Cloud storage icon" src={cloud} />
          <div className={styles.ellipse} />
        </div>
        <div className={styles.ellipse2} />
        <div className={styles.ellipse3} />
      </div>
    </div>
  );
};
