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
import { PE01, PE02, PE03, PE04, PE05 } from "./components/training_course/session/PE_Series_Data";
import { IJM01, IJM02, IJM03, IJM04, IJM05, IJM06, IJM07, IJM08, IJM09, IJM10 } from "./components/training_course/session/IJM_Series_Data";
import { MS01, MS02, MS03, MS04 } from "./components/training_course/session/MS_Series_Data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/metalloy" element={<App />} />
        <Route path="/company_profile" element={<CompanyProfile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/MIST" element={<MISTCourseOverview />} />
        <Route path="/MIST/PE01" element={<SessionDetailPage {...PE01} />} />
        <Route path="/MIST/PE02" element={<SessionDetailPage {...PE02} />} />
        <Route path="/MIST/PE03" element={<SessionDetailPage {...PE03} />} />
        <Route path="/MIST/PE04" element={<SessionDetailPage {...PE04} />} />
        <Route path="/MIST/PE05" element={<SessionDetailPage {...PE05} />} />
        <Route path="/MIST/IJM01" element={<SessionDetailPage {...IJM01} />} />
        <Route path="/MIST/IJM02" element={<SessionDetailPage {...IJM02} />} />
        <Route path="/MIST/IJM03" element={<SessionDetailPage {...IJM03} />} />
        <Route path="/MIST/IJM04" element={<SessionDetailPage {...IJM04} />} />
        <Route path="/MIST/IJM05" element={<SessionDetailPage {...IJM05} />} />
        <Route path="/MIST/IJM06" element={<SessionDetailPage {...IJM06} />} />
        <Route path="/MIST/IJM07" element={<SessionDetailPage {...IJM07} />} />
        <Route path="/MIST/IJM08" element={<SessionDetailPage {...IJM08} />} />
        <Route path="/MIST/IJM09" element={<SessionDetailPage {...IJM09} />} />
        <Route path="/MIST/IJM10" element={<SessionDetailPage {...IJM10} />} />
        <Route path="/MIST/MS01" element={<SessionDetailPage {...MS01} />} />
        <Route path="/MIST/MS02" element={<SessionDetailPage {...MS02} />} />
        <Route path="/MIST/MS03" element={<SessionDetailPage {...MS03} />} />
        <Route path="/MIST/MS04" element={<SessionDetailPage {...MS04} />} />
      </Routes>
      <Copyright />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
