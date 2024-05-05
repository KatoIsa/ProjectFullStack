import { RiArrowLeftSLine } from 'react-icons/ri'
import styles from './nav.module.scss'
import {  useEffect, useState } from 'react'

export default function Nav() {
    const [isActive, setIsActive] = useState(false);

    const handle = () => {
        if (isActive === false) setIsActive(true);
        if (isActive === true) setIsActive(false); 
    }

    useEffect(()=>{
      const handleResize = ()=>{
        if (window.innerWidth < 900) {
          console.log('Mobile Device Detected ...')
          setIsActive(true);
        } else {
          console.log('Desktop Device Detected ...')
          setIsActive(false);
        }
      }

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      }

    },[])

     return (
       <div className={`${styles.container} ${isActive ? styles.hide : ""} `}>
         <ol className={`${isActive ? styles.hide : ""}`}>
           <li>
             <span>Phase(1):</span> <br /> HTML and CSS Basics
           </li>
           <li>
             <span>Phase(2):</span> <br /> JavaScript Basics
           </li>
           <li>
             <span>Phase(3):</span> <br /> Frontend Development with React
           </li>
           <li>
             <span>Phase(4):</span> <br /> Backend Development with Node.js and
             Express
           </li>
           <li>
             <span>Phase(5):</span> <br /> Integration and Full Stack Projects
           </li>
           <li>
             <span>Phase(6):</span> <br /> Best Practices and Advanced Skills
           </li>
         </ol>
         <RiArrowLeftSLine className={styles.NavButton} onClick={handle} />
       </div>
     );
}