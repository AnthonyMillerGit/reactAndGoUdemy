import React, { Fragment, Component } from "react";
import "./AppClass.css";
export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false,
    };
  }

  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({ isTrue: false });
    } else {
      this.setState({ isTrue: true });
    }
  };
  render() {
    return (
      <div>
        <Fragment>
          <hr />
          <h1 className="h1-red">{this.props.msg}</h1>
          <hr />
          {this.state.isTrue ? <h1>True</h1> : <h1>False</h1>}
          <hr />
          <a
            href="#!"
            className="btn btn-outline-secondary"
            onClick={this.toggleTrue}
          >
            Change True And False
          </a>
        </Fragment>
      </div>
    );
  }
}
