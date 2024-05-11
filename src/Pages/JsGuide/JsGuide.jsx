import styles from "./js.module.scss";
import Nav from "../../components/Nav/Navigation";

export default function JsGuide() {
  return (
    <>
      <div className={styles.container}>
        <Nav pageType="js" />
        <div className={styles.contnet}>
          <h1>
            JavaScript
            <br />
            <span>Javascript Basics</span>
          </h1>
        </div>
      </div>
    </>
  );
}
