import React from 'react';
import { Provider } from './Provider';

export const connect = (
  mapStateToProps,
  mapDispatchToProps,
) => (WrapperComponent) => {
  return class extends React.Component {
    static contextType = Provider;

    componentDidMount() {
      this.unsubscribe = this.context.subscribe(
        this.handleStoreChange,
      );
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    handleStoreChange = () => {
      this.forceUpdate();
    };

    render() {
      return (
        <Provider.Consumer>
          <WrapperComponent
            {...mapStateToProps(
              this.context.getState(),
              this.props,
            )}
            {...mapDispatchToProps(
              this.context.dispatch,
              this.props,
            )}
            {...this.props}
          />
        </Provider.Consumer>
      );
    }
  };
};
