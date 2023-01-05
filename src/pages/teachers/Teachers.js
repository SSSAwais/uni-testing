import React, { Component, useEffect, useState } from "react";
import TeacherForm from "../../components/teachers/TeacherForm";
import TeacherTable from "../../components/Teachertable/TeacherTable";
import {
  gettingTeacherData,
  deleteTeacher,
} from "../../controller/teacherData";

import "./Teachers.css";
const Teachers = () => {
  const [teacherLists, setTeacherLists] = useState([]);
  const [cechkTrue, setcechkTrue] = useState(false);

  const addTeacher = (data) => {};

  const handleDelete = (e) => {
    deleteTeacher(e);
  };

  useEffect(() => {
    gettingTeacherData(setTeacherLists);
  }, []);

  return (
    <>
      <section className="teacher-section">
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-lg-12">
              <h4>Teacher</h4>
            </div>
          </div>
          <div className="row">
            {/* <!-- Tabs navs --> */}
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="ex1-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                >
                  Add Teacher
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                >
                  View Teacher List
                </a>
              </li>
            </ul>
            {/* <!-- Tabs navs --> */}

            {/* <!-- Tabs content --> */}
            <div className="tab-content" id="ex1-content">
              <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <TeacherForm onSubmitTeacher={addTeacher} />
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                <div className="col-lg-12">
                  <table className="table teacher-tables">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">CNIC #</th>
                        <th scope="col">Last Qualification</th>
                        <th scope="col">Course</th>
                        <th scope="col" colSpan={2}>
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {teacherLists.map((e, idx) => (
                       
                        <TeacherTable
                          key={idx}
                          id={idx+1}
                          teacherprofile={e.image}
                          teachername={e.firstName}
                          cnic={e.cnic}
                          qualification={e.gender}
                          course={e.lastName}
                          // pressDlt={() => {
                          //   setTeacherLists(
                          //     teacherLists.filter((ele) => ele._id !== e._id)
                          //   );
                          // }}
                          pressDlt={(e) => handleDelete(e)}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- Tabs content --> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Teachers;
