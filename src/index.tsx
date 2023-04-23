import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { StrictMode } from 'react';
import './localization/i18n';
import GlobalSpinner from 'components/GlobalSpinner/GlobalSpinner';
import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <React.StrictMode> */}
          <GlobalSpinner />
          <App />
        {/* </React.StrictMode> */}
      </PersistGate>
    </Provider>
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
