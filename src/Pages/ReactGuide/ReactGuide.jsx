import styles from './react.module.scss';
import Nav from "../../components/Nav/Navigation";

export default function ReactGuide() {
  return (
    <>
      <div className={styles.container}>
        <Nav pageType="react" />
        <div className={styles.contnet}>
          <h1>
            Frontend <span>Development</span> <span>With</span> React
            <br />
            <span>The Journey Begins</span>
          </h1>
        </div>
      </div>
    </>
  );
}