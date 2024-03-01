import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import Statitics from "./pages/Statitics"
import Community from "./pages/Community"
import NoPage from "./pages/NoPage"
import NavbarComponent from "./components/Navbar"
import { useThemeContext } from "./context/themeContext"
import Footer from "./components/Footer"

function App() {

  const { contextTheme, setContextTheme } = useThemeContext();
   // State for the switch value
   const [checked, setChecked] = useState(false);

   // Handler for the switch change event
   const handleSwitch = () => {
     // Update the switch value
     setChecked(!checked);
     setContextTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
   };
 

  return (
    <div className={contextTheme === "light" ? "bg-white h-screen" : "bg-[#292c35] h-screen"}>
    <NavbarComponent handleSwitch={handleSwitch} checked={checked}/>
    
    <Routes>
      <Route path="/" element={<Home contextTheme={contextTheme}/>}/>
      <Route path="statistics" element={<Statitics contextTheme={contextTheme} />}/>
      <Route path="community" element={<Community />}/>
      <Route path="*" element={<NoPage />}/>
    </Routes>
    <div className="absolute bottom-0 flex justify-center items-center">
    <Footer contextTheme={contextTheme}/>
    </div>
  </div>
  )
}


export default App
