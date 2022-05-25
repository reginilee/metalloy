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
import { PE01, PE02, PE03, PE04, PE05 } from "./components/training_course/session/PE_Series/PE_Series_Data";
import { IJM01, IJM02, IJM03, IJM04, IJM05, IJM06, IJM07, IJM08, IJM09, IJM10 } from "./components/training_course/session/IJM_Series/IJM_Series_Data";
import { MS01, MS02, MS03, MS04 } from "./components/training_course/session/MS_Series/MS_Series_Data";
import { SE01, SE02, SE03, SE04, SE05 } from "./components/training_course/session/SE_Series/SE_Series_Data";
import { DC01, DC02, DC03, DC04 } from "./components/training_course/session/DC_Series/DC_Series_Data";
import { CF01, CF02, CF03 } from "./components/training_course/session/CF_Series/CF_Series_Data";
import { HF01, HF02, HF03 } from "./components/training_course/session/HF_Series/HF_Series_Data";
import { ME01, ME02, ME03, ME04, ME05 } from "./components/training_course/session/ME_Series/ME_Series_Data";

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
        <Route path="/MIST/SE01" element={<SessionDetailPage {...SE01} />} />
        <Route path="/MIST/SE02" element={<SessionDetailPage {...SE02} />} />
        <Route path="/MIST/SE03" element={<SessionDetailPage {...SE03} />} />
        <Route path="/MIST/SE04" element={<SessionDetailPage {...SE04} />} />
        <Route path="/MIST/SE05" element={<SessionDetailPage {...SE05} />} />
        <Route path="/MIST/DC01" element={<SessionDetailPage {...DC01} />} />
        <Route path="/MIST/DC02" element={<SessionDetailPage {...DC02} />} />
        <Route path="/MIST/DC03" element={<SessionDetailPage {...DC03} />} />
        <Route path="/MIST/DC04" element={<SessionDetailPage {...DC04} />} />
        <Route path="/MIST/CF01" element={<SessionDetailPage {...CF01} />} />
        <Route path="/MIST/CF02" element={<SessionDetailPage {...CF02} />} />
        <Route path="/MIST/CF03" element={<SessionDetailPage {...CF03} />} />
        <Route path="/MIST/HF01" element={<SessionDetailPage {...HF01} />} />
        <Route path="/MIST/HF02" element={<SessionDetailPage {...HF02} />} />
        <Route path="/MIST/HF03" element={<SessionDetailPage {...HF03} />} />
        <Route path="/MIST/ME01" element={<SessionDetailPage {...ME01} />} />
        <Route path="/MIST/ME02" element={<SessionDetailPage {...ME02} />} />
        <Route path="/MIST/ME03" element={<SessionDetailPage {...ME03} />} />
        <Route path="/MIST/ME04" element={<SessionDetailPage {...ME04} />} />
        <Route path="/MIST/ME05" element={<SessionDetailPage {...ME05} />} />
      </Routes>
      <Copyright />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
