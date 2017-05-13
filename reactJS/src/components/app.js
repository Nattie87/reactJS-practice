import React from 'react';

const todos = [
  {
    task: 'Make React video',
    isCompleted: false
  },
  {
    task: 'Eat Lunch',
    isCompleted: true
  }
];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
      </div>
    );
  }
}
