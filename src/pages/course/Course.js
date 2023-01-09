import React, { Component, useEffect, useState } from "react";
import "./Course.css";
import CourseForm, { CourseList } from "../../components/courseForm/CourseForm";
import CourseListing from "../../components/courselist/CourseList";
import gettingCourseData, { courseDelete } from "../../controller/courseData";
import axios from "axios";
const Course = () => {
  const [courselisting, setCourseListing] = useState([]);
  const gettingCoursedata = (data) => {
    // setCourseListing([...courselisting,data]);
  };

  const handleCourseDlt = (id) => {
    axios
      .delete(`https://dark-gray-agouti-kit.cyclic.app/api/course/${id}`).then((resp)=>{
        console.log(resp,"deleted");
      })
      .catch((resp) => {
        console.log(resp.data, "deleted");
      });
  };

  useEffect(() => {
    axios
      .get("https://dark-gray-agouti-kit.cyclic.app/api/course")
      .then((resp) => {
        if (resp?.data?.success) {
          setCourseListing(resp.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

   
  }, []);

  return (
    <>
      <section>
        <div className="course_section">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Course</h4>
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
                    Course
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
                    Course List
                  </a>
                </li>
              </ul>
              {/* <!-- Tabs navs -->  */}

              {/* <!-- Tabs content --> */}
              <div className="tab-content" id="ex1-content">
                <div
                  className="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <CourseForm onSubmitCourseData={gettingCoursedata} />
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <div className="col-lg-12">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Course title</th>
                          <th>Course Code</th>
                          <th>Subject Id</th>
                          <th>Teacher</th>
                          <th colSpan={2}>Credit Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courselisting?.data?.map((e, idx) => (
                          <CourseListing
                            key={e._id}
                            id={e._id}
                            idx={idx + 1}
                            coursetitle={e.title}
                            coursecode={e.courseCode}
                            subjectcode={e.subjectId[e]}
                            // teacher={e.teacher}
                            credithours={e.creditHours}
                            pressDltCourse={(id) => handleCourseDlt(id)}
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
        </div>
      </section>
    </>
  );
};
export default Course;
