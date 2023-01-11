import { Parallax } from 'react-scroll-parallax'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.bgColor}>
        
      <div className={[ styles.jumbotron].join(" ")}>
        <div className={styles.slantedSquare} >
          <p>Experience new ways to connect at university</p>
        </div>
        <div className={styles.slantedSquare2} />
      </div>

      <div className={[styles.mainBody, styles.container].join(" ")}>
        <div className={styles.contentHeader}>
          <p><span className={styles.bracketThe}>The </span><span className={styles.bracketTitle}>Bracket </span><span className={styles.bracketSubtext}> ?</span></p>
          <p className={styles.jungeText}>Everything a student needs to unlock their potential</p>
          <p className={styles.descText}>Connect with like-minded university students and build exclusive friend groups with Bracket, the social platform designed for you! Discover new opportunities and create meaningful connections based on your individual interests and personality.</p>
        </div>
      </div>


    </div>
  )
}

