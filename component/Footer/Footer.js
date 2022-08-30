import classes from './footer.module.scss'
import React from 'react'
import { FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.icons}>

        <ul>
          <li id='github'><a href='https://github.com/TypeLuis' target="_blank" rel="noopener noreferrer"><i><FaInstagram /></i></a></li>

          <li id='linkedin'><a href='https://www.linkedin.com/in/luis-lopez-192565227/' target="_blank" rel="noopener noreferrer"><i><FaPinterestP /></i></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer