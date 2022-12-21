import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux';
// import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        {/* <HashRouter> */}
          <App />
        {/* </HashRouter> */}
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.Fragment>,
  document.getElementById('root')
);
