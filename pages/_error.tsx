import * as React from "react";
import { Layout } from "../components/Layout";
import { NextPage } from "next";
import { Container } from "../components/Container";

const ErrorPage: NextPage<{}> = () => (
  <Layout title="Not Found" description="Reality not found">
    <Container>
      <h1>404</h1>
      <h3>Lost. //</h3>
      <p>Reality Not Found ?</p>
    </Container>
  </Layout>
);

export default ErrorPage;
