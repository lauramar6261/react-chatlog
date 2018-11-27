import React from 'react';
import './Message.css';
import Timestamp from './Timestamp';


const Message = (props) => {

  const sender = props.sender
  const body = props.body
  const timeStamp = Timestamp(props.timeStamp)

  return (
    <div className="chat-entry local">
      <article className="entry-bubble">
      <span className="entry-name">{sender}</span>
      <span className="entry-body">{body}</span>
      <span className="entry-time">{timeStamp}</span>
      </article>
    </div>
  );
};


export default Message;
