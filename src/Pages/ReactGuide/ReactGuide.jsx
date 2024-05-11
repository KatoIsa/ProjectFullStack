import styles from './react.module.scss';
import Nav from "../../components/Nav/Navigation";

export default function ReactGuide() {
  return (
    <>
      <div className={styles.container}>
        <Nav pageType="react" />
        <div className={styles.contnet}>
          <h1>
            Frontend Development
            <br />
            <span>WITH REACT JS</span>
          </h1>
        </div>
      </div>
    </>
  );
}