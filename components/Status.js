import React from "react";
import Link from "next/link";

const Status = props => (
  <div>
    {!props.finished ? (
      <div className="status">Complete {props.counter}/8</div>
    ) : (
      <div className="status">
        That's it!{" "}
        <Link href="/submit">
          <a>Here's how to submit your work.</a>
        </Link>
      </div>
    )}

    <style jsx>{`
      .status {
        font-weight: 700;
        margin-top: 20px;
      }
    `}</style>
  </div>
);

export default Status;
