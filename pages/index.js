import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Open_Sans } from '@next/font/google'

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
      <div className={[styles.navbar, styles.container].join(" ")}>
        <p className={styles.bracketTitle}>Bracket</p>
        <ul>
          <li className={styles.navLinks}><a href='#'>Our goal</a></li>
          <li className={styles.navLinks}><a href='#'>About us</a></li>
          <li className={[styles.navButton, styles.navLinks].join(" ")}><a href='#'>Contact us</a></li>
        </ul>
      </div>
    </div>
  )
}

