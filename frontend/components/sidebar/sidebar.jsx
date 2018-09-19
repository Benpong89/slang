import React from "react";
import { Link } from "react-router-dom";
import ChannelGroups from "./channel_groups_container.jsx";
import DMGroups from "./dm_groups_container.jsx";

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
        <ChannelGroups />
        <DMGroups />
      </div>
    );
  }
}

export default Sidebar;
