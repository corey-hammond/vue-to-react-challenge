import React from "react";
import Layout from "../components/Layout";

const Submit = () => (
  <Layout>
    <section>
      <p className="description">
        Submit a link to your React app to{" "}
        <a href="mailto:careers@bukwild.com">careers@bukwild.com</a>. The link
        should be to a Codesandbox/Codepen/etc or to a public git repository.
        Thank you for taking the time to apply!
      </p>
    </section>

    <style jsx>{`
      .description {
        margin-top: 10px;
      }
    `}</style>
  </Layout>
);

export default Submit;
