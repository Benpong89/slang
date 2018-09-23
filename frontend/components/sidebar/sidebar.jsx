import React from "react";
import { Link } from "react-router-dom";
import ChannelGroup from "./channel_group_container.jsx";
import DirectMessageGroup from "./direct_message_group_container.jsx";
import StarredGroup from "./starred_group_container.jsx";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.props.requestAllSubscriptions();
  }

  render() {
    return (
      <div className="sidebar-container">
        <h3 className="sidebar-title">Slang Workspace</h3>
        <div className="greeting-container">
          <h6 className="sidebar-username">
            <div className="green-dot">{"\u25cf"}</div>
            {this.props.currentUser.username}
          </h6>
          <Link className="sidebar-signout" to="/" onClick={this.props.signout}>
            Sign Out
          </Link>
        </div>
        <StarredGroup />
        <ChannelGroup />
        <DirectMessageGroup />
      </div>
    );
  }
}

export default Sidebar;
