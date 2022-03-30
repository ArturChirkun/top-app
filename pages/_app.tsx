import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";
import ym from "react-yandex-metrika";
import { YMInitializer } from "react-yandex-metrika";
import Router from "next/router";

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  Router.events.on("routeChangeComplete", (url: string) => {
    if (typeof window !== "undefined") {
      ym("hit", url);
    }
  });
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://mc.yandex.ru" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans+Condensed:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <YMInitializer accounts={[]} options={{ webvisor: true, defer: true }} version='2'/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
