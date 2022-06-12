import Head from "next/head";
import React, { useEffect } from "react";
import Router from "next/router";

import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/login");
    }
  });
  return (
    <>
      <Head>
        <title>Greyswitch | Login</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
