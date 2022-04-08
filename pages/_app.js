import '../styles/globals.css'
import Head from "next/head";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>zena's portfolio</title>
      <meta name="description" content="" />
      <meta charset="UTF-8" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      <script type="text/javascript" async defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
      <script type="text/javascript" async defer src="https://kit.fontawesome.com/40e8c6ef71.js" crossOrigin="anonymous" />
    </Head>
    <Component {...pageProps} />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/Draggable.min.js" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/TextPlugin.min.js" />
    </>
  )
}

export default MyApp
