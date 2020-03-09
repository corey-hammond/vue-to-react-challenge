import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import jsonData from "../public/data/checklist.json";
import Layout from "../components/Layout";
import Status from "../components/Status";
import Complete from "../components/Complete";

class Index extends Component {
  state = {
    checklist: this.props.data,
    transition: true
  };

  static async getInitialProps(ctx) {
    const data = await jsonData.map((msg, idx) => {
      const task = {
        id: idx,
        message: msg,
        complete: false
      };

      return task;
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
    const completed = this.state.checklist.filter(task => task.complete);
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
            {this.state.checklist.map((task, idx) => {
              return (
                <li
                  key={task.id}
                  className={`task ${task.complete ? "complete" : ""}`}
                  onClick={() => this.handleCompleted(idx)}
                >
                  {task.message}
                </li>
              );
            })}
          </ul>

          <CSSTransition
            in={this.state.transition}
            appear={true}
            timeout={400}
            classNames="fade"
          >
            {!finished ? <Status counter={counter} /> : <Complete />}
          </CSSTransition>

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
              transition: opacity, background, color;
              transition-duration: 0.2s;
            }

            .task:not(.complete):hover {
              background: rgba(0, 156, 75, 0.2);
            }

            .complete {
              opacity: 0.25;
              color: var(--green);
            }
          `}</style>
        </section>
      </Layout>
    );
  }
}

export default Index;
