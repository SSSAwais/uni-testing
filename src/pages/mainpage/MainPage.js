import React, { Component, useEffect, useState } from "react";
import Login from "../login/Login";
import Students from "../students/Students";
import Home from "../home/Home";
import Teachers from "../teachers/Teachers";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Course from "../course/Course";
import Report from "../report/Report";
import CourseAttendance from "../courseattendance/CourseAttendance";
const MainPage = () => {
  function adminList() {
    let items = JSON.parse(localStorage.getItem("admin"));
    if (items) {
      return JSON.parse(localStorage.getItem("admin"));
    } else {
      return [];
    }
  }

  const [admins, setAdmins] = useState(adminList());
  let navigate = useNavigate();
  const loginng = () => {
    navigate("/");

    // console.log(admins, "apps");
  };
  useEffect(() => {
    loginng();
  }, []);
  return (
    <>
      <div className="context">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="course" element={<Course />} />
          <Route path="report" element={<Report />} />
          <Route path="courseattendance" element={<CourseAttendance />} />
        </Routes>
      </div>
    </>
  );
};
export default MainPage;
