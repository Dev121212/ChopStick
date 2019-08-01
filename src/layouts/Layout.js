import React from "react";
import { withRouter } from "react-router-dom";
import AppBarComponent from "../components/AppBarComponent";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <AppBarComponent title={this.props.title} />
        {children}
      </div>
    );
  }
}

export default withRouter(Layout);
