import * as React from "react";
import { Layout } from "../components/Layout";
import { NextPage } from "next";
import { RevocYoutubeTeaser } from "./discography/revoc";
import { Container } from "../components/Container";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Container>
        <h1>REVOC</h1>
        <h3>
          Reverse Vocaloid Cover
          <br />
          Coming soon!
        </h3>
        <RevocYoutubeTeaser height={600} />
      </Container>
    </Layout>
  );
};

export default IndexPage;
