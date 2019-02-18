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

export interface ILoadingProps {
  toggleLoading: (status?: boolean, relative?: boolean, label?: string, size?: any) => void;
}

export interface IProperties {
  label?: string,
  size?: any,
  positionRelative?: boolean,
}

const loading = <P extends ILoadingProps>(
  SpinnerComponent: React.ComponentType<ILoadingComponentProps>,
  { label, size, positionRelative }: IProperties,
) => {
  const defaultPositionRelative = positionRelative || false;
  const defaultLabel = label || "";
  const defaultSize = size;

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
              <SpinnerComponent label={this.state.label} size={this.state.size} />
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