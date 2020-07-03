import React from 'react';
import { changeName } from './store';
// import { connect } from './Form';

import { connect } from 'react-redux';

// presentational
const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <button type="button" onClick={props.changeName}>
        Change name
      </button>
    </div>
  );
};

const mapStateToPropsForPerson = (state) => ({
  name: state.name,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeName: () =>
      dispatch(changeName(ownProps.nameToChange)),
    fetchProduct: () => dispatch(thunk),
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
        <ThemeContext.Consumer>
          {(context) => (
            <PersonConnected nameToChange={context} />
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
