import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./state/store";
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




class Main extends React.Component {
    render() {
      return(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>  
            <ToastContainer  />
            <App />
          </PersistGate>
        </Provider>
      )
    }
  }
ReactDOM.render(<Main />, document.getElementById('root'));

