import { GlobalStyles } from "../styles/GlobalStyles"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Disney+ | Movies and Shows</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles></GlobalStyles>
    </>
  )
}

export default MyApp
