
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

import AppRoutes from './components/routes/routes';




function App() {


  return (
    <>
      <Header />
      <div className="container">
        <SideBar />
        <AppRoutes />
    
      </div>
      
      <Footer />
    </>
  );
}

export default App;
