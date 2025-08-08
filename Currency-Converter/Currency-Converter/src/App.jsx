import { Outlet, useNavigate } from "react-router";
import { CurrencyCalculator } from "./components/Content/CurrencyCalculator/CurrencyCalculator";
import CurrencyConverter from "./components/Content/CurrencyConverter/CurrencyConverter";
import { ReverseCalculator } from "./components/Content/ReverseCalculator/ReverseCalculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useEffect } from "react";

export default function App() {
  //   const navigate = useNavigate();

  // useEffect(() => {
  //   // This checks the performance entries to see how the page was loaded.
  //   const navigationEntries = performance.getEntriesByType("navigation");
    
  //   // If the page was reloaded, navigate to the home page.
  //   if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
  //     navigate('/Home');
  //   }
  // }, [navigate]);
  

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
     
    </div>
  );
}
