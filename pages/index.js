import React, { Component } from "react";
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

    const status = finished ? <div>Finished</div> : <div>Not finished</div>;

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
                  className={`${item.complete ? "complete" : ""}`}
                  onClick={() => this.handleCompleted(idx)}
                >
                  {item.message}
                </li>
              );
            })}
          </ul>

          {/* Status */}
          {status}

          <style jsx>{`
            .complete {
              color: red;
            }
          `}</style>
        </section>
      </Layout>
    );
  }
}

export default Index;
