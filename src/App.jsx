import React from 'react';
import { connect } from './Form';

// presentational
const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
    </div>
  );
};

// presentational
const FancyPerson = (props) => {
  return (
    <div>
      <h1 style={{ background: 'pink' }}>
        Name: {props.name}
      </h1>
    </div>
  );
};

const mapStateToPropsForPerson = (state) => ({
  name: state.boy,
});

const PersonConnected = connect(mapStateToPropsForPerson)(
  Person,
);

const mapStateToPropsForFancyPerson = (state) => ({
  name: state.girl,
});

const FancyPersonConnected = connect(
  mapStateToPropsForFancyPerson,
)(FancyPerson);

// const CoordinatesConnected = withMouse(Coordinates);
// const CoordinatesConnectedEva = withMouse(CoordinatesEva);

export class App extends React.Component {
  componentDidUpdate() {
    console.log('didUpdate');
  }
  render() {
    return (
      <div>
        <PersonConnected />
        <FancyPersonConnected />
      </div>
    );
  }
}
