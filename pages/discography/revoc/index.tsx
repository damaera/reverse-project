import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";
import Link from "next/link";

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

const CONTENT_LEFT = [
  {
    slug: "koi-wa-sensou",
    title: "Koi wa Sensou",
    excerpt: [
      "I will fight, declares war with the universe",
      "Let’s begin, this is war!",
      "Fight it out, shoot right to the heart",
      "I don’t have a choice"
    ]
  },
  {
    slug: "night-sky-patrol-of-tomorrow",
    title: "Night sky patrol of tomorrow",
    excerpt: [
      "I picks out enemies to fight, no hopes for the future",
      "The future was cruel",
      "Even so, the world i always watched with you was truly beautiful"
    ]
  },
  {
    slug: "leia",
    title: "Leia",
    excerpt: [
      "Softly, eternity stopped breathing and left me in despair",
      "When ticking stops, the world will end",
      "I can't leave the evidence for your and my existence"
    ]
  }
];
const CONTENT_RIGHT = [
  {
    slug: "melt",
    title: "Melt",
    excerpt: [
      "I wish time would stop,",
      "I feel like I'm gonna cry and yet",
      "I’m so happy I could die!"
    ]
  },
  {
    slug: "tell-your-world",
    title: "Tell your world",
    excerpt: [
      "Words I want to tell you",
      "Sounds i want to give you",
      "Links of feelings from a world",
      "Connecting everything, connecting to everywhere"
    ]
  },
  {
    slug: "kuroneko",
    title: "Kuroneko",
    excerpt: [
      "Time passing, I totally forgot everything about you",
      "The world where I was or something beyond my memory",
      "I was born for the sake to meet you",
      "In the cosmos, where whising star flowed"
    ]
  }
];

const Page: React.FunctionComponent = () => (
  <Layout title="Discography - REVOC">
    <Container>
      <h1>REVOC</h1>
      <h3>Reverse Vocaloid COVER</h3>
      <div className="intro">
        <blockquote>
          <h4>i died, backwards in time</h4>
          <p>then, i met someone that i love</p>
        </blockquote>
        <RevocRotatingClock size={400} />
      </div>

      <div className="content">
        <h3>Tracklists</h3>
        <div className="tracklists">
          <div>
            {CONTENT_LEFT.map(content => (
              <Link href={`/discography/revoc/${content.slug}`}>
                <a>
                  <div className="track">
                    <h4>{content.title}</h4>
                    <p>
                      {content.excerpt.map(excerpt => (
                        <div>{excerpt}</div>
                      ))}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <div>
            {CONTENT_RIGHT.map(content => (
              <Link href={`/discography/revoc/${content.slug}`}>
                <a>
                  <div className="track">
                    <h4>{content.title}</h4>
                    <p>
                      {content.excerpt.map(excerpt => (
                        <div>{excerpt}</div>
                      ))}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="outro">
        <RevocRotatingClock size={400} />
        <blockquote>
          <h4>i died, backwards in time</h4>
          <p>
            I realized that someone that i love <br />
            Is another me that exist in timeline when time is moving forward.{" "}
            <br /> Are you me ? no, you are not really the same me. <br />
            But you are me in another timeline.
            <br /> I died backwards in time, you will died forward in time.
          </p>
        </blockquote>
      </div>
    </Container>
    <style jsx>{`
      .intro,
      .outro,
      .tracklists {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      .tracklists > div {
        flex: 1;
        padding-right: 20px;
      }
      .tracklists {
        padding: 40px 0;
      }
      .outro blockquote {
        width: 400px;
      }
      .track h4 {
        font-size: 20px;
      }
      .track p {
        font-size: 14px;
      }

      blockquote h4 {
        font-size: 20px;
      }
    `}</style>
  </Layout>
);

export default Page;
