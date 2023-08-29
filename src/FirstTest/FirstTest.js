import React    from "react";
import template from "./FirstTest.jsx";

class FirstTest extends React.Component {
  render() {
    return template.call(this);
  }
}

export default FirstTest;
