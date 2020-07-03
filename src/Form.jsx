import React from 'react';
import { Provider } from './Provider';

export const connect = (
  mapStateToProps,
  mapDispatchToProps,
) => (WrapperComponent) => {
  return class extends React.Component {
    componentDidMount() {
      window.addEventListener(
        'mousemove',
        this.handleMouseMove,
      );
    }

    componentWillUnmount() {
      window.removeEventListener(
        'mousemove',
        this.handleMouseMove,
      );
    }

    handleMouseMove = (event) => {
      this.setState({ x: event.screenX, y: event.screenY });
    };

    render() {
      return (
        <Provider.Consumer>
          {(store) => (
            <WrapperComponent {...mapStateToProps(store)} />
          )}
        </Provider.Consumer>
      );
    }
  };
};
