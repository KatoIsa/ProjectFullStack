import Nav from "../../components/Nav/Navigation";
import styles from "./home.module.scss";

export default function Home() {
  const comma = "'";
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <div className={styles.contnet}>
          <h1>
            Build <span>&</span> Learn
            <br />
            <span>A Project-Based Approach to Full Stack Development</span>
          </h1>

          <div className={styles.block}>
            <div className={styles.left}>
              <p className={styles.blockTitle}>
                Explore the Power of MERN Stack Development
              </p>
              <p>
                Welcome! Our project-based plan will guide you step-by-step as
                you build real-world applications using the MERN stack: MongoDB,
                Express.js, React, and Node.js. Whether you are a beginner or
                seeking advanced skills, this approach will help you master Full
                Stack Development through hands-on projects.
              </p>
            </div>

            <div className={styles.right}></div>
          </div>

          <h1 className={styles.sec1}>
            What You{comma}ll Build
            <br />
            <span className={styles.sub1}>
              In this program, you will build a series of projects that not only
              teach you the technical skills but also give you a portfolio to
              showcase your abilities. Here is a glimpse of what you will create
            </span>
          </h1>

          <div className={styles.block}>
            <div className={styles.left}>
              <p className={styles.blockTitle}>Personal Portfolio Website:</p>
              <p>
                Start with a simple portfolio to learn the basics of HTML and
                CSS.
              </p>
            </div>

            <div className={`${styles.right} ${styles.htmlcss}`}></div>
          </div>

          <div className={styles.block}>
            <div className={`${styles.right} ${styles.javascript}`}></div>

            <div className={styles.left}>
              <p className={styles.blockTitle}>Interactive Quiz:</p>
              <p>
                Use JavaScript to build a quiz with questions and
                multiple-choice answers, learning about loops, functions, and
                event handling.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.left}>
              <p className={styles.blockTitle}>Todo List App:</p>
              <p>
                Explore React by creating a Todo List app, introducing you to
                components, state, and props.
              </p>
            </div>

            <div className={`${styles.right} ${styles.React}`}></div>
          </div>

          <div className={styles.block}>
            <div className={`${styles.right} ${styles.Node}`}></div>

            <div className={styles.left}>
              <p className={styles.blockTitle}>Full-Stack Blog Application:</p>

              <p>
                Connect React to a Node.js backend, building a full-stack blog
                with authentication.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.left}>
              <p className={styles.blockTitle}>E-commerce Platform:</p>
              <p>
                Complete your journey with a complex e-commerce platform that
                integrates frontend, backend, and MongoDB for data storage.
              </p>
            </div>

            <div className={`${styles.right} ${styles.ECommerce}`}></div>
          </div>
          
        </div>
      </div>
    </>
  );
}
