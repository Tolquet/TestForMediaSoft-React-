import axios from "axios";

// Экшн для начала загрузки данных
const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

// Экшн для успешного получения данных
const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

// Экшн для ошибки при загрузке данных
const fetchDataError = (error) => ({
  type: "FETCH_DATA_ERROR",
  payload: error,
});

// Асинхронный экшн для получения данных с API
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());  // Начинаем загрузку данных
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch(fetchDataSuccess(response.data));  // Успешно полученные данные
    } catch (error) {
      dispatch(fetchDataError(error.message));  // Обработка ошибки
    }
  };
};
