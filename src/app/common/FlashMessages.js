import React, { Component } from "react";
import "./FlashMessage.css";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../actions/flashMessagesAction";

const mapStateToProps = state => {
  return {
    messages: state.flashMessages
  };
};

const mapDispachToProps = {
  deleteFlashMessage
};

class FlashMessages extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => (
          <div key={message.id} className="webform-confirmation">
            <div className="success-container">

              <div style={{display:"none"}}>
                {setTimeout(() => {
                this.props.deleteFlashMessage(message.id);
              }, 3000)}
              </div>
              

              <img
                src="http://form.swansonrussell.com/sites/default/files/_images/content/checkmark-2x.png"
                alt=""
                width="50"
                height="50"
              />
              <div className="success-copy">
                <p>
                  {message.text}
                  Thank You,
                  <br /> your submission has been received.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FlashMessages);
