import React from 'react';
import { ThemeContext } from './ThemeContext';
import { Button } from './Button';

export class Form extends React.Component {
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
      <div>
        <p>x: {this.state.x}</p>
        <p>y: {this.state.y}</p>
        <ThemeContext.Consumer>
          {({ theme, toggle }) => (
            <Button theme={theme} onClick={toggle}>
              Search
            </Button>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
