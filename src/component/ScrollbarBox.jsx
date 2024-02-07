import React, { useState } from 'react';
import './css/ScrollableBox.css';
import '../assets/bootstrap/css/bootstrap.min.css';

const ScrollableBox = ({ children, onSubmit }) => {
  const [messageText, setMessageText] = useState('');

  const handleSubmit = () => {
    onSubmit(messageText);
    setMessageText('');
  };

  return (
    <div className="scrollable-box-container">
      <div className="sticky-title">
        Message
      </div>
      <div className="row scrollable-box-row">
        <div className="col">
          {React.Children.map(children, child => {
            const className = child.props.id === 1 ? 'left' : 'right';
            return React.cloneElement(child, { className });
          })}
        </div>
      </div>
      <div className="row sticky-input-row">
        <div className="col">
          <input
            type="text"
            placeholder="Saisissez votre message"
            className="form-control rounded-pill"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary rounded-pill"
            onClick={handleSubmit}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableBox;
