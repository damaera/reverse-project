import * as React from "react";
import Link from "next/link";
import { Layout } from "../../components/Layout";

const DiscographyIndexPage: React.FunctionComponent = () => (
  <Layout title="Discography">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default DiscographyIndexPage;
