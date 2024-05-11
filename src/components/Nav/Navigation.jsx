import { RiArrowLeftSLine } from "react-icons/ri";
import styles from "./nav.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Nav({ pageType }) {
  const [isActive, setIsActive] = useState(false);
  const handle = () => {
    if (isActive === false) setIsActive(true);
    if (isActive === true) setIsActive(false);
  };
  const activeNav = {
    parent: {
      color: "var(--secondary-color)",
      width: "120% !important",
      marginLeft: "-20px",
      padding: "15px 7px",
      cursor: "pointer",
      background: "var(--Primary-color)",
      boxShadow: "0px 0px 5px 3px #00000041",
    },
    child: { color: "#0c2431" },
  };
  // ass soon as the window loads trigger this aaction ...
  useEffect(() => {
    if (window.innerWidth < 900) {
      console.log("Mobile Screen: no resize");
      setIsActive(true);
    } else {
      console.log("Desktop Screen: no resize");
      setIsActive(false);
    }
  }, []);

  // reset values when user resizes the window ...
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        console.log("Mobile Screen: Resize ...");
        setIsActive(true);
      } else {
        console.log("Desktop Screen: Resize ...");
        setIsActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // trigger side nav element active.
  return (
    <div className={`${styles.container} ${isActive ? styles.hide : ""} `}>
      <ol className={`${isActive ? styles.hide : ""}`}>
        <Link style={{ textDecoration: "none" }} to="/">
          <li style={pageType === "home" ? activeNav.parent : null}>
            {pageType !== "home" ? <span>{"< "}</span> : ''}
             Home
          </li>
        </Link>
        {[
          {
            link: "/HtmlCssGuide",
            name: "htmlcss",
            title: "HTML and CSS Basics",
          },
          { link: "/JsGuide", name: "js", title: "Javascript Basics" },
          {
            link: "/ReactGuide",
            name: "react",
            title: "Frontend Development with React",
          },
          {
            link: "/NodeGuide",
            name: "node",
            title: "Backend Dev with Node and Express",
          },
          {
            link: "/FullStack",
            name: "full",
            title: "Integration and Full Stack Projects",
          },
          {
            link: "/practice",
            name: "practice",
            title: "Best Practices and Advanced Skills",
          },
        ].map((item, i) => (
          <Link key={i + 1} style={{ textDecoration: "none" }} to={item?.link}>
            <li style={pageType === item.name ? activeNav.parent : null}>
              <span style={pageType === item.name ? activeNav.child : null}>
                Phase({i + 1}):
              </span>
              <br /> {item?.title}
            </li>
          </Link>
        ))}
      </ol>
      <RiArrowLeftSLine className={styles.NavButton} onClick={handle} />
    </div>
  );
}

Nav.propTypes = {
  pageType: PropTypes.string,
};
