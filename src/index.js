import React from 'react';
import ReactDOM from 'react-dom'

//Create new component to produce some HTML
const App = () => {
  return <div>HI</div>;
}

//Add component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
