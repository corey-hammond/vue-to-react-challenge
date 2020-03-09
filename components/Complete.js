import React from "react";
import Link from "next/link";

const Complete = () => (
  <div className="status">
    That's it!{" "}
    <Link href="/submit">
      <a>Here's how to submit your work.</a>
    </Link>
    <style jsx>{`
      .status {
        font-weight: 700;
        margin-top: 20px;
      }
    `}</style>
  </div>
);

export default Complete;
