import React from 'react';

export const withMouse = (WrapperComponent) => {
  return class extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

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
        <WrapperComponent {...this.props} {...this.state} />
      );
    }
  };
};
