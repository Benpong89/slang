import React from "react";
import { Link } from "react-router-dom";

class DMGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="conversation-container">
        Direct Messages
        <ul className="conversation-ul">
          <li className="conversation-li">Friend</li>
          <li className="conversation-li">Frand</li>
          <li className="conversation-li">Freends</li>
        </ul>
      </div>
    );
  }
}

export default DMGroups;
