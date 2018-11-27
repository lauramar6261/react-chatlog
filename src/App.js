import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message'

const data = [
  {
    "sender":"Vladimir",
    "body":"why are you arguing with me",
    "timeStamp":"2018-05-29T22:49:06+00:00"
  }
]

class App extends Component {
  render() {
    console.log(chatMessages);
    const statusComponents = chatMessages.map((status) => {
            return < Message
            sender={status.sender}
            body={status.body}
            timeStamp={status.timeStamp}
            key={status.name}/>
          });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        {statusComponents}
        </main>
      </div>
    );
  }
}

export default App;
