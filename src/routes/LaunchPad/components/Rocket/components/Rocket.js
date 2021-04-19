import React, { useState, Component } from "react";
import RocketCore from "./RocketCore";

let FunctionalRocket = () => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
};
export const MemodFunctionalRocket = React.memo(FunctionalRocket); //purified component - wont take off.

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  shouldComponentUpdate() {
    //returns false so it doesn't render
    return false;
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
