import React from "react";
import { Link } from "react-router-dom";

class ChannelGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="conversation-container">
        Channels
        <ul className="conversation-ul">
          <li className="conversation-li"># I have a dream</li>
          <li className="conversation-li"># That one day</li>
          <li className="conversation-li"># These will be Channels</li>
        </ul>
      </div>
    );
  }
}

export default ChannelGroups;
