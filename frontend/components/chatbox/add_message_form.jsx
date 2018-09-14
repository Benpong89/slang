import React from 'react'

class AddMessageForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = { body: '' };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      const message = Object.assign({}, this.state);
      this.props.createMessage(message)
    }

    render () {
        return (
            <div className ='messages_submit_container'>

              <form onSubmit={this.handleSubmit}>
                <input type="text"
                  value={this.state.body}
                  onChange={this.update('body')}
                  placeholder="your message goes here"/>
                <button type="submit">Create a new message...?</button>
              </form>

            </div>
        )
    }
}

export default AddMessageForm
