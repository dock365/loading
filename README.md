# Loading HOC
<!-- [![Build Status](https://travis-ci.org/codedock365/loading.svg?branch=master)](https://travis-ci.org/codedock365/loading) -->
[![npm Version](https://img.shields.io/npm/v/@dock365/loading.svg)](https://www.npmjs.com/package/@dock365/loading)


## Install
1 Install react confirm as dependency
  ```bash
  # Using yarn package manager
  $ yarn add @dock365/loading

  # Using npm package manager
  $ npm install --save @dock365/loading
  ```
2 Import React confirm module
  ```javascript
  // ES6
  import loading from "@dock365/loading"

  // ES5
  var loading = require("@dock365/loading");
  ```
## Example

#### [CodeSandbox Example Link](https://codesandbox.io/s/k9k0kojn83)
```javascript
  import React from "react";
  import ReactDOM from "react-dom";
  import loading from "@dock365/loading";


  function Comp(props) {
    return (
      <div className="App">
        <button
          onClick={() => {
            props.toggleLoading();
            setTimeout(() => {
              props.toggleLoading();
            }, 2000);
          }}
        >
          Do Action
        </button>
      </div>
    );
  }

  function LoadingMessage(props) {
    return <div className="App">Loading...</div>;
  }

  const App = loading(LoadingMessage, {})(Comp);
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
```

## Properties
### Component Props
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
| toggleLoading | (status?: boolean, relative?: boolean, label?: string, size?: any) => void | This is the function to invoke loading component, *status* is to optionally set status, loading or not. *relative* position of wrapping component. *label* loading message/label. *size* for adjusting loading spinner size.
|


### Loading component Props
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
| label | string | Label to display on loading component |
| size | any | size to adjust spinner or any loading element |

### HOC Properties

```javascript
loading(LoadingComponent, { label, size, positionRelative })(Component)
```

| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
| label | string | default label|
|size | any | default size|
|positionRelative | boolean | default position value |


## Contributing!
All contributions are super welcome!


## License

React Confirm is MIT licensed.