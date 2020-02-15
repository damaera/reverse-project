import * as React from "react";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About Reverse Project, Biography">
    <Container>
      <h1>About</h1>
      <h3>Biography</h3>
      <p>
        Reverse Project is a project that focused on creating Original stories
        that told by music.
        <br />
        While at first, the stories that the songs tell might not seem to be
        related through the plot or the characters, <br />
        the more you learn, the more you will realize that everything in Reverse
        Project is connected.
      </p>

      <h3>Members</h3>

      <div className="about-members">
        <div className="item">
          <h5>Vocalists</h5>
          <div>A i k a</div>
          <div>Giita</div>
          <div>Mayuko</div>
        </div>
        <div className="item">
          <h5>Music Creators</h5>
          <div>Era</div>
        </div>
        <div className="item">
          <h5>Illustrator</h5>
          <div>Deronoitz</div>
        </div>
      </div>
    </Container>
    <style jsx>
      {`
        .about-members {
          display: flex;
          width: 100%;
        }
        .item {
          flex: 1;
        }

        .item div {
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.8;
        }
      `}
    </style>
  </Layout>
);

export default AboutPage;
