import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // для работы с асинхронными действиями
import formReducer from "./reducers/formReducer";
import dataReducer from "./reducers/dataReducer";

// Объединяем редукторы
const rootReducer = combineReducers({
  form: formReducer, // для управления состоянием формы
  data: dataReducer, // для управления загружаемыми данными
});

// Создаем Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
