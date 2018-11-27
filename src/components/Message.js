import React from 'react';
import './Message.css';
import Timestamp from './Timestamp';


const Message = (props) => {

  const sender = props.sender
  const body = props.body
  const timeStamp = Timestamp(props.timeStamp)

  if (sender === "Vladimir" ) {
     return (
        <div className="chat-entry local">
        <p className="entry-name">{sender}</p>
          <article className="entry-bubble">
          <p className="entry-body">{body}</p>
          <p className="entry-time">{timeStamp}</p>
          </article>
        </div>
     )
   } else {
     return (
       <div className="chat-entry remote">
       <p className="entry-name">{sender}</p>
         <article className="entry-bubble">
         <p className="entry-body">{body}</p>
         <p className="entry-time">{timeStamp}</p>
         </article>
       </div>
     );
   }
};


export default Message;
