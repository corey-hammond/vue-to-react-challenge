import React, { Component } from "react";
import Link from "next/link";
import jsonData from "../public/checklist.json";
import Layout from "../components/Layout";

class Index extends Component {
  state = {
    checklist: this.props.data
  };

  static async getInitialProps(ctx) {
    const data = await jsonData.map((msg, idx) => {
      const container = {
        id: idx,
        message: msg,
        complete: false
      };

      return container;
    });

    return {
      data: data
    };
  }

  handleCompleted = idx => {
    this.setState(state => {
      state.checklist[idx].complete = !state.checklist[idx].complete;
      return state;
    });
  };

  render() {
    const completed = this.state.checklist.filter(item => item.complete);
    const finished = this.state.checklist.length == completed.length;
    const counter = completed.length;

    return (
      <Layout>
        <section>
          {/* Intro */}
          <p>
            <strong>Your objective</strong>: Convert this Codesandbox to React.
          </p>
          <p>
            The purpose of this test is to validate experience with some of the
            tasks you'll be encountering in your first month with Bukwild. Such
            as:
          </p>

          {/* Tasks */}
          <ul className="tasks">
            {this.state.checklist.map((item, idx) => {
              return (
                <li
                  key={item.id}
                  className={`task ${item.complete ? "complete" : ""}`}
                  onClick={() => this.handleCompleted(idx)}
                >
                  {item.message}
                </li>
              );
            })}
          </ul>

          {/* Status */}
          {!finished ? (
            <div className="status">Complete {counter}/8</div>
          ) : (
            <div className="status">
              That's it!{" "}
              <Link href="/submit">
                <a>Here's how to submit your work.</a>
              </Link>
            </div>
          )}

          <style jsx>{`
            --green: #009c4b;

            p {
              margin-top: 10px;
            }

            .tasks {
              margin-top: 20px;
            }

            .task {
              margin-top: 5px;
              padding: 2px 6px;
              cursor: pointer;
              opacity: 0.8;
              transition opacity, background, color
              transition-duration 0.2s
            }

            .complete {
              color: var(--green);
            }

            .status {
              font-weight: 700;
              margin-top: 20px;
            }
          `}</style>
        </section>
      </Layout>
    );
  }
}

export default Index;
