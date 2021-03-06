import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";

const Page: React.FunctionComponent = () => (
  <Layout title="Chapter 01 - Aegis">
    <Container>
      <h1>Chapter 01</h1>

      <iframe
        src="https://open.spotify.com/embed/playlist/7FYteflXAEpOtALYWCxZX7"
        width="500"
        height="600"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe>
    </Container>
  </Layout>
);

export default Page;
