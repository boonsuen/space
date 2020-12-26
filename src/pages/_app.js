import Head from 'next/head';
import GlobalStyle, { fontFaceRules } from '../components/GlobalStyle.css';

import img_favicon from '../assets/img/icon.svg';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={img_favicon} />
        <style dangerouslySetInnerHTML={{ 
          __html: fontFaceRules 
        }}></style>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}