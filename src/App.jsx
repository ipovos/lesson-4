import React from 'react';
import { Form } from './Form';

export class App extends React.Component {
  componentDidUpdate() {
    console.log('didUpdate');
  }
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
