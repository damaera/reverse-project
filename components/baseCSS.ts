import css from "styled-jsx/css";

export const baseCSS = css.global`
  :root {
    --backgroundColor: #111;
    --textColor: #eee;

    --black: #000;

    --fontFamily1: "Vollkorn", serif;
    --fontFamily2: "Roboto Mono", monospace;
  }

  html {
    font-size: 14px;
    font-family: var(--fontFamily1);
    background: var(--black);
    color: var(--textColor);
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  strong,
  b {
    font-weight: 900;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }

  * {
    transition: all 0.1s;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
    font-family: var(--fontFamily2);
  }

  h3 {
    font-size: 20px;
  }

  h1 {
    font-size: 60px;
  }

  p {
    font-size: 16px;
    font-weight: 400px;
    opacity: 0.8;
  }
`;
