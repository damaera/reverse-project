import React from "react";
import Link from "next/link";

type Props = {};

export const Header: React.FunctionComponent<Props> = () => {
  return (
    <>
      <div className="header-wrapper">
        <Link href="/">
          <a>
            <div className="header-logo">
              <img
                src="/img/reverse-project-logo-text-light.png"
                alt="Reverse Project Logo"
              />
            </div>
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/discography">
            <a>Discography</a>
          </Link>
          <Link href="/story">
            <a>Story</a>
          </Link>
          <Link href="/character">
            <a>Character</a>
          </Link>
          <Link href="/merch">
            <a>Merch</a>
          </Link>
          <Link href="/social-media">
            <a>Social Media</a>
          </Link>
        </nav>
      </div>
      <style jsx>
        {`
          .header-wrapper {
            height: 100vh;
          }
          .header-logo {
            text-align: center;
          }
          .header-logo img {
            width: 120px;
            height: 120px;
            object-fit: contain;
            margin: 20px auto;
          }
          nav {
            display: block;
            text-align: center;
          }
          nav a {
            padding: 12px 20px;
            display: block;
            font-family: var(--fontFamily2);
            opacity: 0.7;
            border-bottom: solid 1px #000;
          }
          nav a:hover {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};
