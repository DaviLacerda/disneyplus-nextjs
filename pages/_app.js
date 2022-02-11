import { GlobalStyles } from "../GlobalStyles"
import Head from "next/head"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Disney+ | Movies and Shows</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
