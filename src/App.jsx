import React from 'react';
import { changeName } from './store';
import { connect } from './react-redux';

const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <button type="button" onClick={props.changeName}>
        Change name
      </button>
      <button type="button" onClick={props.tryChangeName}>
        Try change name
      </button>
    </div>
  );
};

const nameSelector = (state) => state.name;

const mapStateToPropsForPerson = (state) => ({
  name: nameSelector(state),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeName: () =>
      dispatch(changeName(ownProps.nameToChange)),

    tryChangeName: () =>
      dispatch((dispatch, getState) => {
        if (
          nameSelector(getState()) === ownProps.nameToChange
        ) {
          dispatch(changeName('Gena'));
          return;
        }

        dispatch(changeName(ownProps.nameToChange));
      }),
  };
};

const PersonConnected = connect(
  mapStateToPropsForPerson,
  mapDispatchToProps,
)(Person);

export class App extends React.Component {
  render() {
    return (
      <div>
        <PersonConnected nameToChange="Viktor" />
      </div>
    );
  }
}
