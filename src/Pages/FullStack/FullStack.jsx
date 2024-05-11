import styles from "./fullstack.module.scss";
import Nav from "../../components/Nav/Navigation";

export default function FullStack() {
  return (
    <>
      <div className={styles.container}>
        <Nav pageType="full" />
        <div className={styles.contnet}>
          <h1>
            Full Stack
            <br />
            <span>Integration and Full Stack Projects</span>
          </h1>
        </div>
      </div>
    </>
  );
}
