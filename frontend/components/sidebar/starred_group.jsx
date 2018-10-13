//unicode for gold star U+2B50
//unicode for empty star U+2B52

import React from "react";
import { Link } from "react-router-dom";

class StarredGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="conversation-container">
        <button
          onClick={this.openDetailModal}
          className="channel_detail_button"
        >
          Favorites
        </button>
        <button onClick={this.openCreateModal} className="create_new_channel">
          {"\u2295"}
        </button>
        <ul className="conversation-ul">#test</ul>
      </div>
    );
  }
}

export default StarredGroup;
