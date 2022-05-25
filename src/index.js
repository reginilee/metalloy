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
import SessionDetailPage from "./components/training_course/SessionDetailPage";
import FAQ from "./components/faq/FAQ";
import { PE01, PE02, PE03, PE04, PE05 } from "./components/training_course/PE_Series_Data";

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
        <Route path="/MIST/PE01" element={<SessionDetailPage {...PE01} />} />
        <Route path="/MIST/PE02" element={<SessionDetailPage {...PE02} />} />
        <Route path="/MIST/PE03" element={<SessionDetailPage {...PE03} />} />
        <Route path="/MIST/PE04" element={<SessionDetailPage {...PE04} />} />
        <Route path="/MIST/PE05" element={<SessionDetailPage {...PE05} />} />
      </Routes>
      <Copyright />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
