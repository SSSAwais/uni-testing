import React, { Component, useState } from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <section>
        <div className="dashboard">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Dashboard</h4>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="aw_small_box bg-warning">
                  <div className="inner">
                    <h3>50</h3>
                    <p>Total Teachers</p>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <a href="#" className="aw_small_footer_box">
                    More Info{" "}
                    <i className="fa-sharp fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="aw_small_box bg-info">
                  <div className="inner">
                    <h3 className="aw_heading">200</h3>
                    <p className="aw_users">Total Students</p>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-image"></i>
                  </div>
                  <a href="#" className="aw_small_footer_box aw_white_te">
                    More Info{" "}
                    <i className="fa-sharp fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="aw_small_box bg-danger">
                  <div className="inner">
                    <h3 className="aw_heading">30</h3>
                    <p className="aw_users">Block Students</p>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <a href="#" className="aw_small_footer_box aw_white_te">
                    More Info{" "}
                    <i className="fa-sharp fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="aw_small_box bg-success">
                  <div className="inner">
                    <h3 className="aw_heading">170</h3>
                    <p className="aw_users">UnBlocked Students</p>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <a href="#" className="aw_small_footer_box aw_white_te">
                    More Info{" "}
                    <i className="fa-sharp fa-solid fa-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
