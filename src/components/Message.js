import React from 'react';
import './Message.css';
import Timestamp from './Timestamp';


const Message = (props) => {

  const sender = props.sender
  const body = props.body
  const timeStamp = Timestamp(props.timeStamp)

  return (
    <div className="chat-entry local">
      <span>{sender}</span>
      <span>{body}</span>
      <span>{timeStamp}</span>
    </div>
  );
};


export default Message;
