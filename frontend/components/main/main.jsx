import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Chatbox from '.././chatbox/chatbox.jsx'
import Sidebar from '.././sidebar/sidebar_container.jsx'

class Main extends React.Component {

  render() {
    return (
    <div className='main-container'>
      <Sidebar />
      <Chatbox />
    </div>
    );
  }

}

export default withRouter(Main)
