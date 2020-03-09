import React from "react";

const Status = props => (
  <div>
    <div className="status">Complete {props.counter}/8</div>

    <style jsx>{`
      .status {
        font-weight: 700;
        margin-top: 20px;
      }
    `}</style>
  </div>
);

export default Status;
