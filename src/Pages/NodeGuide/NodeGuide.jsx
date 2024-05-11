import styles from "./nodeGuide.module.scss";
import Nav from "../../components/Nav/Navigation";

export default function NodeGuide() {
  return (
    <>
      <div className={styles.container}>
        <Nav pageType="node" />
        <div className={styles.contnet}>
          <h1>
            Backend Development <span>With</span> Node <span>&</span> Express
            <br />
            <span>The Journey Begins</span>
          </h1>
        </div>
      </div>
    </>
  );
}
