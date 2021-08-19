import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import CryptoList from '../components/CryptoList'
import CryptoState from '../context/cryptoState'
import ErrorState from '../context/error/errorState'

export default function Home() {
  return (
    <>
      <Head>
        {/* COMMON TAGS */}
        <meta charset="utf-8" />
        <title>Binast</title>
        {/*Search Engine */}
        <meta name="description" content="Binast offers live changing crypto data for enthusiasts of trading" />
        <meta name="image" content="assets/flyer.png" />
        {/* Schema.org for Google*/}
        <meta itemProp="name" content="Binast" />
        <meta itemProp="description" content="Binast offers live changing crypto data for enthusiasts of trading" />
        <meta itemProp="image" content="assets/flyer.png" />
        {/* Twitter  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Binast" />
        <meta name="twitter:description" content="Binast offers live changing crypto data for enthusiasts of trading" />
        <meta name="twitter:creator" content="@tzivigelstein" />
        <meta name="twitter:image:src" content="assets/flyer.png" />
        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta name="og:title" content="Binast" />
        <meta name="og:description" content="Binast offers live changing crypto data for enthusiasts of trading" />
        <meta name="og:image" content="assets/flyer.png" />
        <meta name="og:url" content="https://binast.vercel.app" />
        <meta name="og:site_name" content="Binast" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website"></meta>

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <>
        <CryptoState>
          <ErrorState>
            <Navbar />
            <Header />
            <CryptoList />
          </ErrorState>
        </CryptoState>
      </>
    </>
  )
}
