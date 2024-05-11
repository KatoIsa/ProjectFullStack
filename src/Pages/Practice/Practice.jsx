import styles from "./practice.module.scss";
import Nav from "../../components/Nav/Navigation";

export default function Practice() {
  return (
    <>
      <div className={styles.container}>
        <Nav pageType="practice" />
        <div className={styles.contnet}>
          <h1>
            Best Practices <span>&</span> Advanced Skills
            <br />
            <span>The Journey Begins</span>
          </h1>
        </div>
      </div>
    </>
  );
}
