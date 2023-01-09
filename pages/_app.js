import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../shared/navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Bracket Project</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Project Bracket' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
