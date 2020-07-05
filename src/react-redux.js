import React from 'react';

const Context = React.createContext(null);

export const Provider = ({ store, ...restProps }) => {
  return <Context.Provider value={store} {...restProps} />;
};

export const connect = (
  mapStateToProps,
  mapDispatchToProps,
) => (WrapperComponent) => {
  return class extends React.Component {
    static contextType = Context;

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
      const { getState, dispatch } = this.context;
      return (
        <WrapperComponent
          {...mapStateToProps(getState(), this.props)}
          {...mapDispatchToProps(dispatch, this.props)}
          {...this.props}
        />
      );
    }
  };
};
