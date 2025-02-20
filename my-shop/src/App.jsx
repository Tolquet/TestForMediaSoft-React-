
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

import AppRoutes from './components/routes/routes';




function App() {


  return (
    <>
      <Header />

      <SideBar />
      <div className="container">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
