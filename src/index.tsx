import * as React from "react";

export interface ILoadingComponentProps {
  loading?: boolean;
  label?: string;
  size?: string;
}

const loading = <P extends ILoadingComponentProps>(SpinnerComponent: React.ComponentType<ILoadingComponentProps>) => {
  return (Component: React.ComponentType<P>): React.ComponentType<P> => {

    return class extends React.Component<P, {}> {
      public render() {
        if (this.props.loading) {
          return (
            <div>
              <SpinnerComponent />
              <Component {...this.props} />
            </div>
          )
        }

        return <Component {...this.props} />
      }
    }
  }
}

export default loading;