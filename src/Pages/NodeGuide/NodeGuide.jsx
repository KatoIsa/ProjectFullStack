import styles from "./nodeGuide.module.scss";
import Nav from "../../components/Nav/Navigation";

export default function NodeGuide() {
  return (
    <>
      <div className={styles.container}>
        <Nav pageType="node" />
        <div className={styles.contnet}>
          <h1>
            Backend Development
            <br />
            <span>WITH NODE AND EXPRESS</span>
          </h1>
        </div>
      </div>
    </>
  );
}
