import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullStack from "./fullstack";
import DataScience from "./datascience";
import CyberSecurity from "./cyber";
import Career from "./career";
import All from "./all";
import "./AppRoutes.css";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="fullstackdevelopment" element={<FullStack />}></Route>
        <Route path="datascience" element={<DataScience />}></Route>
        <Route path="cybersecurity" element={<CyberSecurity />}></Route>
        <Route path="career" element={<Career />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
