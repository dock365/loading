import * as React from "react";

export interface ISpinnerComponentProps {
  loading?: boolean;
  label?: string;
  size?: string;
}

const loading = (SpinnerComponent: React.ComponentType<ISpinnerComponentProps>) => {
  return <P extends ISpinnerComponentProps>(Component: React.ComponentType<P>): React.ComponentType<P> => {

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