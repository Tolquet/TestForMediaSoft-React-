import React from "react";
import ReactDOM from "react-dom/client"; // Изменяем на react-dom/client
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // импортируем Provider
import store from "./redux/store"; // импортируем store
import { combineReducers } from "redux";    
import { dataReducer } from "./redux/reducers/dataReducer"

export const rootReducer = combineReducers({
    data: dataReducer,
  });

const root = ReactDOM.createRoot(document.getElementById("root")); // Используем createRoot
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// Если вам нужен reportWebVitals, оставьте его. В противном случае удалите.
reportWebVitals();