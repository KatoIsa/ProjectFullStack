import styles from "./html.module.scss";
import Nav from "../../components/Nav/Navigation";

export default function BasicsHtml() {

  return (
    <>
      <div className={styles.container}>
        <Nav pageType="htmlcss" />
        <div className={styles.contnet}>
          <h1>
            HTML <span>&</span> CSS
            <br />
            <span>HTML and CSS Basics</span>
          </h1>
        </div>
      </div>
    </>
  );
}
