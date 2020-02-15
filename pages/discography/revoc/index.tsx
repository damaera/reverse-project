import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";

const REVOC_IMG_PATH = "/img/discography/revoc";

const RotatingClockItem: React.FunctionComponent<{
  asset: string;
  size: number;
  rotate: number;
}> = ({ asset, size, rotate = 1 }) => (
  <div>
    <style jsx>{`
      @keyframes rotate {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(${rotate < 0 ? "-" : ""}360deg);
        }
      }
      div {
        transform: translateZ(0);
        position: absolute;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        top: 50%;
        left: 50%;
        margin-top: -${size / 2}%;
        margin-left: -${size / 2}%;
        width: ${size}%;
        height: ${size}%;
        background-image: url(${REVOC_IMG_PATH}/${asset}.png);
        animation: rotate ${60 / Math.abs(rotate)}s linear infinite;
      }
    `}</style>
  </div>
);

export const RevocRotatingClock: React.FunctionComponent<{ size: number }> = ({
  size
}) => (
  <>
    <div className="wrapper">
      <RotatingClockItem asset="cross-line" size={100} rotate={0.2} />
      <RotatingClockItem asset="clock-12" size={100} rotate={-0.4} />
      <RotatingClockItem asset="shuriken" size={100} rotate={0.4} />
      <RotatingClockItem asset="clock-center" size={40} rotate={-0.2} />
      <RotatingClockItem asset="revoc-logo" size={30} rotate={0} />
    </div>
    <style jsx>{`
      .wrapper {
        position: relative;
        width: ${size}px;
        height: ${size}px;
        overflow: visible;
        opacity: 0.5;
        transform: translateZ(0);
        margin: 0 auto;
      }
      .wrapper:hover {
        opacity: 0.8;
      }
    `}</style>
  </>
);

const Page: React.FunctionComponent = () => (
  <Layout title="Discography - REVOC">
    <Container>
      <h1>REVOC</h1>
      <h3>REVerse VOCaloid COVER</h3>
      <h3>Coming soon!</h3>
      <RevocRotatingClock size={400} />
    </Container>
  </Layout>
);

export default Page;
