import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Copyright from "./components/common/Copyright";
import CompanyProfile from "./components/company_profile/CompanyProfile";
import MISTCourseOverview from "./components/training_course/MISTCourseOverview";
import PE01 from "./components/training_course/PE_Series/PE01";
import FAQ from "./components/faq/FAQ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/company_profile" element={<CompanyProfile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/MIST" element={<MISTCourseOverview />} />
        <Route path="/MIST/PE01" element={<PE01 />} />
      </Routes>
      <Copyright />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
