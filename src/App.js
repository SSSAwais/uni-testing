import Header from "./layout/header/Header";
import SideBar from "./layout/sidebar/SideBar";
import "./App.css";

import MainPage from "./pages/mainpage/MainPage";



function App() {
  function adminList() {
    let items = JSON.parse(localStorage.getItem("admin"));
    if (items) {
      return JSON.parse(localStorage.getItem("admin"));
    } else {
      return [];
    }
  }

  return (
    <>
    <div>
      <Header />

      <div className="content">

        {
          adminList().length>=1 ?<SideBar />:""
        }
        
        <MainPage />
      </div>
    </div>
  
    </>
  );
}

export default App;
