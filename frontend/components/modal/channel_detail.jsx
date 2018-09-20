import React from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";
import SearchInput, { createFilter } from "react-search-input";

// const KEYS_TO_FILTERS = ["channel.name", "channel.description"];

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  setCurrentChannel(channelId) {
    return e => {
      e.preventDefault();
      this.props.createSubscription({
        user_id: this.props.currentUser.id,
        subscribeable_id: channelId,
        subscribeable_type: "Channel"
      });
      this.props.requestCurrentChannel(channelId);
      this.props.closeModal();
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const channels = this.props.channels.map((channel, idx) => {
      return (
        <li key={idx}>
          <button
            onClick={this.setCurrentChannel(channel.id)}
            className="conversation-li"
          >
            # {channel.name}
          </button>
        </li>
      );
    });

    return (
      <div className="modal-channel-container">
        <button className="x-button" onClick={this.props.closeModal}>
          {"\u24e7"}
        </button>
        <h1 className="channel_modal_title">Check out one of our Channels!</h1>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <ul className="conversation-li">{channels}</ul>
      </div>
    );
  }
}

export default ChannelDetail;

//WILL EVENTUALLY BE FORM TO SEARCH FOR CHANNELS

// import React, {Component} from 'react'
// import SearchInput, {createFilter} from 'react-search-input'
//
// import emails from './mails'
//
// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']
//
// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       searchTerm: ''
//     }
//     this.searchUpdated = this.searchUpdated.bind(this)
//   }

//   render () {
//     const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
//
//     return (
//       <div>
//         <SearchInput className="search-input" onChange={this.searchUpdated} />
//         {filteredEmails.map(email => {
//           return (
//             <div className="mail" key={email.id}>
//               <div className="from">{email.user.name}</div>
//               <div className="subject">{email.subject}</div>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
//
//   searchUpdated (term) {
//     this.setState({searchTerm: term})
//   }
// }
