import React from "react";
import Head from "next/head";
import { resetCSS } from "./resetCSS";
import { baseCSS } from "./baseCSS";
import { Header } from "./Header";

type Props = {
  title?: string;
};

export const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        href="https://fonts.googleapis.com/css?family=Vollkorn:400,400i,700|Roboto+Mono:400,700&display=block"
        rel="stylesheet"
      ></link>
    </Head>
    <style jsx global>
      {resetCSS}
    </style>
    <style jsx global>
      {baseCSS}
    </style>

    <div className="layout-wrapper">
      <div className="layout-header">
        <Header />
      </div>
      <div className="layout-body">{children}</div>
    </div>
    <style jsx>
      {`
        .layout-wrapper {
          min-height: 100vh;
          display: flex;
        }

        .layout-header {
          width: 220px;
          background: #111;
        }

        .layout-body {
          flex: 1;
          overflow: scroll;
          max-height: 100vh;
          padding: 40px 20px;
        }
      `}
    </style>
  </div>
);
