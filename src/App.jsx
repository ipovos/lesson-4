import React from 'react';
import { withMouse } from './Form';

// presentational
const Coordinates = (props) => {
  return (
    <div>
      <h1>X: {props.x}</h1>
      <h1>Y: {props.y}</h1>
      <h1>Name: {props.name}</h1>
    </div>
  );
};

// presentational
const CoordinatesEva = (props) => {
  return (
    <div>
      <h1>X: {props.x * 2}</h1>
      <h1>Y: {props.y * 2}</h1>
      <h1>Name: {props.name}</h1>
    </div>
  );
};

const CoordinatesConnected = withMouse(Coordinates);
const CoordinatesConnectedEva = withMouse(CoordinatesEva);

export class App extends React.Component {
  componentDidUpdate() {
    console.log('didUpdate');
  }
  render() {
    return (
      <div>
        <CoordinatesConnected name="Viktor" />
        <CoordinatesConnectedEva name="Eva" />
      </div>
    );
  }
}
