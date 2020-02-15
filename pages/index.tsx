import * as React from "react";
import { Layout } from "../components/Layout";
import { NextPage } from "next";
import { RevocRotatingClock } from "./discography/revoc";
import { Container } from "../components/Container";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Container>
        <Link href="/discography/revoc">
          <a>
            <RevocRotatingClock size={400} />
          </a>
        </Link>
      </Container>
    </Layout>
  );
};

export default IndexPage;
