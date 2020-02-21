import css from "styled-jsx/css";

export const baseCSS = css.global`
  :root {
    --backgroundColor: #060606;
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
  h4,
  h5,
  h6 {
    margin-bottom: 10px;
    font-weight: normal;
    font-family: var(--fontFamily2);
  }

  h3 {
    font-size: 20px;
    margin-top: 0;
  }

  h1 {
    font-size: 60px;
  }

  h5 {
    letter-spacing: 0.2em;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-weight: 400px;
    line-height: 1.8;
    opacity: 0.8;
  }
`;
