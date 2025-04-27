import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/fav-logo.png" type="image/jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
