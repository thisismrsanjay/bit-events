import React, { Component } from "react";
import "./FlashMessage.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    messages: state.flashMessages
  };
};

// const mapDispachToProps = dispatch => {
//   return {

//   };
// };


class FlashMessages extends Component {

  

  render() {
  console.log(this.props.messages);
    return (
      <div>
        { this.props.messages.map((message,index) => (
          <div key={index} className="webform-confirmation">
            <div   className="success-container">
              <img
                src="http://form.swansonrussell.com/sites/default/files/_images/content/checkmark-2x.png"
                alt=""
                width="50"
                height="50"
              />
              <div className="success-copy">
                <p>
                  {message.text }
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

export default connect(mapStateToProps)(FlashMessages);
