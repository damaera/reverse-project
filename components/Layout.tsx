import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { resetCSS } from "./resetCSS";
import { baseCSS } from "./baseCSS";
import { Header } from "./Header";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

export const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Reverse Project — Official Website",
  description = "Reverse Project is a project that focused on creating Original stories that told by music. While at first, the stories that the songs tell might not seem to be related through the plot or the characters, the more you learn, the more you will realize that everything in Reverse Project is connected.",
  image = "https://reverse-project.com/img/share.jpg"
}) => {
  const [isHeaderShown, setHeaderShown] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (node?.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setHeaderShown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reverse-project.com/" />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description}></meta>
        <link rel="shortcut icon" href="/favicon.ico" />

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
        <div className="layout-header" ref={node}>
          <Header />
        </div>
        <div className="layout-body">{children}</div>
      </div>
      <div className="hamburger" onClick={_ => setHeaderShown(true)} />
      <style jsx>
        {`
          .hamburger {
            width: 50px;
            height: 50px;
            background: #999;
            position: absolute;
            top: 0;
            left: 0;
            cursor: pointer;
          }
          .layout-wrapper {
            min-height: 100vh;
            display: flex;
          }

          .layout-header {
            width: 220px;
            background: var(--backgroundColor);
            z-index: 9;
          }

          @media only screen and (max-width: 800px) {
            .layout-header {
              position: absolute;
              left: ${isHeaderShown ? 0 : -220}px;
            }
          }

          .layout-body {
            flex: 1;
            overflow: scroll;
            max-height: 100vh;
            padding: 0 20px;
          }
        `}
      </style>
    </div>
  );
};
