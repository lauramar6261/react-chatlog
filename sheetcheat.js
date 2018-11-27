//creating a component
import React from 'react';
import './Badge.css';
export default Badge;

const Badge = (props) => {
  return (

  );
}


// nested component
const Timeline = (props) => {
  console.log(props)
  const events = props.data.events.map((object) => {
    return <TimelineEvent
    name={object.person}
    key={object.person}/>
  });
  return (
    <div>
    {events}
    </div>
  );
}
 // basic component
const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const relative = time.fromNow();

  return (
    <span title={absolute}>{relative}</span>
  );
};

export default Timeline; //required

//API
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {
  render() {
    const name = ['laura']
    const num = 5
    // if (num ===5 ) {
    //   return (
    //     <div>
    //       Not so wonderful JSX
    //     </div>
    //   )
    // }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src="https://www.goodfreephotos.com/albums/vector-images/colorful-natural-tree-vector-clipart.png" alt="tree" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {name}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

//Data
// sending data
<Avatar data = {URL}/>
//receiving data
{props.data}
