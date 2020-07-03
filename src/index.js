import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.jsx';
import * as serviceWorker from './serviceWorker';

import { Provider } from './Provider';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    };
  }

  toggle = () => {
    console.log('toggle');
    this.setState(
      (prevState) => {
        return {
          theme:
            prevState.theme === 'dark' ? 'red' : 'dark',
        };
      },
      () => {
        console.log(this.state);
      },
    );
  };

  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

ReactDOM.render(
  <Provider.Provider
    value={{ boy: 'Evgen', girl: 'Daria' }}
  >
    <Root />
  </Provider.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
