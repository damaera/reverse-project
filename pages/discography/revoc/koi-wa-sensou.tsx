import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Container } from "../../../components/Container";
import { Lyric } from "../../../components/Lyric";

const Page: React.FunctionComponent = () => (
  <Layout title="REVOC - Koi wa Sensou">
    <Container>
      <h1>Koi wa Sensou</h1>
      <h3>Love is War</h3>
      <Lyric
        original={[["trsdfsdfsd", "sdfsdfsf"]]}
        meaning={[["hello world"]]}
      />
    </Container>
  </Layout>
);

export default Page;
