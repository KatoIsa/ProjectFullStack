import styles from "./fullstack.module.scss";
import Nav from "../../components/Nav/Navigation";

export default function FullStack() {
  return (
    <>
      <div className={styles.container}>
        <Nav pageType="full" />
        <div className={styles.contnet}>
          <h1>
            Integration <span>&</span> Full Stack <span>Projects</span>
            <br />
            <span>The Journey Begins</span>
          </h1>
        </div>
      </div>
    </>
  );
}
