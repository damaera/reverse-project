import * as React from "react";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";
import { Credit } from "../../components/Credit";

const DISCOGRAPHY = [
  {
    slug: "revoc",
    title: "REVOC",
    subtitle: "Reverse Vocaloid Cover",
    credit: {
      Released: "February 2020",
      Tracks: "6",
      Label: "Erased Records"
    }
  },
  {
    slug: "chapter-01",
    title: "Chapter 01",
    subtitle: "The Beginning",
    credit: {
      Released: "June 2018",
      Tracks: "6",
      Label: "Erased Records"
    }
  }
];

const Page: React.FunctionComponent = () => (
  <Layout title="Discography">
    <Container>
      <h1>Discography</h1>

      {DISCOGRAPHY.map(disc => (
        <Link href={`/discography/${disc.slug}`}>
          <a>
            <div className="item">
              <h3>{disc.title}</h3>
              <h4>{disc.subtitle}</h4>
              <Credit credit={disc.credit} />
            </div>
          </a>
        </Link>
      ))}
    </Container>
    <style jsx>{`
      .item {
        padding: 20px 0;
        border-top: solid 1px #222;
      }
    `}</style>
  </Layout>
);

export default Page;
