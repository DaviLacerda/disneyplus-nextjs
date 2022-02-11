import "../styles/GlobalStyles.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Disney+ | Movies and Shows</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
