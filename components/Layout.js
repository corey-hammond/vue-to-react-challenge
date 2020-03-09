import React from "react";
import Head from "next/head";

const Layout = props => (
  <div className="layout">
    <Head>
      <title>Bukwild Vue &rarr; React Test</title>
      <link rel="stylesheet" href="css/styles.css" />
    </Head>

    <a href="//www.bukwild.com">
      <img
        className="logo"
        src="https://www.bukwild.com/logo.png"
        alt="Bukwild"
      />
    </a>
    <h1 className="title">Vue &rarr; React</h1>

    {props.children}

    <style jsx>{`
      .layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 560px;
        margin: 0 auto;
        padding: 20px;
      }

      .logo {
        width: 128px;
      }

      .title {
        margin-top: 30px;
      }
    `}</style>
  </div>
);

export default Layout;
