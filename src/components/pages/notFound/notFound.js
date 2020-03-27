import React, { Component } from "react";

class notFound extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>
            No match for <code>{window.location.pathname}</code>
          </h3>
        </div>
      </div>
    );
  }
}

export default notFound;
