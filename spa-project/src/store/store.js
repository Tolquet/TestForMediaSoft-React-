import { configureStore } from '@reduxjs/toolkit';  
import rootReducer from './reducers'; // создайте файл редюсеров в этой директории  

const store = configureStore({  
    reducer: rootReducer,  
});  

export default store;