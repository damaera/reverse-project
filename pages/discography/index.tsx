import * as React from "react";
import Link from "next/link";
import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";

const Page: React.FunctionComponent = () => (
  <Layout title="Discography">
    <Container>
      <h1>Discography</h1>

      <Link href="/discography/revoc">
        <div className="item">
          <h3>REVOC</h3>
          <h4>Tracks: 6</h4>
          <h4>Released: February 2020</h4>
          <h4>Label: Erased Records</h4>
        </div>
      </Link>
      <Link href="/discography/chapter-01">
        <div className="item">
          <h3>Chapter 01</h3>
          <h4>Tracks: 6</h4>
          <h4>Released: June 2018</h4>
          <h4>Label: Erased Records</h4>
        </div>
      </Link>
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
