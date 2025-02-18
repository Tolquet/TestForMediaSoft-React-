import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";


import { getCategories } from './store/reducers/CategoriesSlice';
import AppRoutes from './components/routes/routes';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Header />
      <AppRoutes />
      <div className="container">
        <SideBar />
      </div>
      <Outlet /> 
      <Footer />
    </>
  );
}

export default App;
