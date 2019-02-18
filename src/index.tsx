import * as React from "react";
import { string } from "prop-types";

export interface ILoadingComponentProps {
  label?: string;
  size?: string;
}

export interface IComponentState {
  loading?: boolean;
  relative?: boolean;
  label?: string;
  size?: any;
}



const loading = <P extends {}>(
  SpinnerComponent: React.ComponentType<ILoadingComponentProps>,
  defaultLabel: string = "",
  defaultSize?: any,
  defaultPositionRelative: boolean = false
) => {
  return (Component: React.ComponentType<P>): React.ComponentType<P> => {

    return class extends React.Component<P, IComponentState> {
      constructor(props: P) {
        super(props);

        this.state = {
          loading: false,
          relative: defaultPositionRelative,
          label: defaultLabel,
          size: defaultSize,
        }

        this._toggleLoading = this._toggleLoading.bind(this);
      }
      public render() {
        if (this.state.loading) {
          return (
            <div style={this.state.relative ? { position: "relative" } : {}}>
              <SpinnerComponent label={this.state.label}  size={this.state.size} />
              <Component {...this.props} toggleLoading={this._toggleLoading} />
            </div>
          )
        }

        return <Component {...this.props} toggleLoading={this._toggleLoading} />
      }

      private _toggleLoading(status?: boolean, relative?: boolean, label?: string, size?: any) {
        this.setState(prevState => ({
          loading: status === undefined ? !prevState.loading : status,
          relative: relative || defaultPositionRelative,
          label: label || defaultLabel,
          size: size || defaultSize,
        }))
      }
    }
  }
}

export default loading;