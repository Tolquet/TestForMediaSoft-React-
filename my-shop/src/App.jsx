import { useDispath } from 'react-redux'
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import "./styles/main.scss";

import { getCategories } from './store/reducers/CategoriesSlice';



function App() {
  const dispatch = useDispath();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Header />
      <SideBar />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default App;
