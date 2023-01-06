import Link from "next/link";
import styles from"../styles/comingsoon.module.css"

const comingSoon = () => {
  return (
    <div className={styles.home}>

      <div className={[styles.navbar, styles.container].join(" ")}>
          <Link href='/' className={styles.bracketTitle}>Bracket</Link>
          <ul>
            <Link className={styles.navLinks} href='/comingSoon'>Our goal</Link>
            <li className={styles.navLinks}><a href='#'>About us</a></li>
            <li className={[styles.navButton, styles.navLinks].join(" ")}><a href='#'>Contact us</a></li>
          </ul>
        </div>

      <h1 className={styles.text}>Coming soon... &#8987;</h1>

    </div>
  )
}

export default comingSoon