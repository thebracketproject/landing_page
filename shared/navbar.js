import Link from "next/link"
import styles from "../styles/navbar.module.css"
import { useState } from "react"
import { Divide as Hamburger } from "hamburger-react"

const DesktopNavbar = () => {
  return (
    <div className={[styles.navbar, styles.container].join(" ")}>
      <Link href='/'><span className={styles.bracketThe}>The </span><span className={styles.bracketTitle}>Bracket</span></Link>
      <ul>
        {/* <Link className={styles.navLinks} href='/comingSoon'>Our goal</Link>
        <Link className={styles.navLinks} href='/comingSoon'>About us</Link> */}
        <Link className={[styles.navButton, styles.navLinks].join(" ")} href='/comingSoon'>Contact us</Link>
      </ul>
    </div>
  )
}

const MobileNavbar = (props) => {
  const { active, toggle } = props
  return (
    <>
    </>
  )
}

const Navbar = (props) => {
  const [navbarState, setNavbarState] = useState(false)
  const {isMobile} = props;
  return (
    isMobile?
    <MobileNavbar active={navbarState} toggle={setNavbarState} />
    :
    <DesktopNavbar />
  )
}

export default Navbar