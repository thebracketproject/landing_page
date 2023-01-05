import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.bgColor}>
      <Head>
        <title>Project Bracket</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Project Bracket' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.relativePos}>

        <div className={[styles.navbar, styles.container].join(" ")}>
          <p className={styles.bracketTitle}>Bracket</p>
          <ul>
            <li className={styles.navLinks}><a href='#'>Our goal</a></li>
            <li className={styles.navLinks}><a href='#'>About us</a></li>
            <li className={[styles.navButton, styles.navLinks].join(" ")}><a href='#'>Contact us</a></li>
          </ul>
        </div>
        
        <div className={[ styles.jumbotron].join(" ")}>
          <div className={styles.slantedSquare} >
            <p>Experience new ways to connect at university</p>
          </div>
          <div className={styles.slantedSquare2} />
        </div>

        <div className={[styles.mainBody, styles.container].join(" ")}>
          <div className={styles.contentHeader}>
            <p><span className={styles.bracketTitle}>Bracket</span><span className={styles.bracketSubtext}> for universities</span></p>
            <p className={styles.jungeText}>Everything a student needs to unlock their potential</p>
            <p className={styles.descText}>Connect with like-minded university students and build exclusive friend groups with Bracket, the social platform designed for you! Discover new opportunities and create meaningful connections based on your individual interests and personality.</p>
          </div>
        </div>

        <div className={styles.footer}>
          <p>All rights reserved 	&copy; Ahmad Rafi</p>
        </div>
        
      </div>
    </div>
  )
}

