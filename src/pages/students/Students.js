import React, { Component, useEffect, useState } from "react";
import profile from "../../assets/image/awais.jpg";
import Users from "../../components/user/Users";
import StudentForm, {
  studentList,
} from "../../components/studentform/StudentForm";
import "./Students.css";
import gettingStudentData from "../../controller/studentData";
import axios from "axios";
const Students = () => {
  const [studentsRecord, setStudentsRecord] = useState([]);
  const [editStudentForm,setStudentForm]=useState(false);
  const addstudents = (data) => {
    setStudentsRecord([...studentsRecord, data]);
  };
  console.log(studentsRecord.results, "students");
  useEffect(() => {
    axios
      .get("https://dark-gray-agouti-kit.cyclic.app/api/student")
      .then((resp) => {
        if (resp?.data?.results) {
          setStudentsRecord(resp.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const _handleDeleteStudent=(id)=>{
      console.log(id,"get id for delete student");
  }
  const _handleUpdateStudent=(id)=>{
    console.log(id,"update student form ");
  }


  

  return (
    <>
      <section>
        <div className="student_records">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-12">
                <h4>Students</h4>
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
                    Add Student
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
                    View Student Lists
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
                  <StudentForm onSubmitStudent={addstudents} />
                </div>
                <div
                  className="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                {
                  editStudentForm ?(
                    <>
                    <form onSubmit={handleSubmitingStudentRecord} className="text-center">
        <div className="row mt-3 justify-content-center">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Student Name"
                value={studentData.studentName}
                onChange={(e) => handleInput(e)}
                name="studentName"
              />
            </div>

            <div className="mb-3">
              <NewInput
                type="number"
                className="form-control"
                labelName="CNIC"
                value={studentData.cnic}
                onChange={(e) => handleInput(e)}
                name="cnic"
              />
              {message &&
                cnic(
                  <p className="m-0 data studentidd">
                    Please Enter CNIC Number
                  </p>
                )}
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Address"
                value={studentData.address}
                onChange={(e) => handleInput(e)}
                name="address"
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Student Id"
                value={studentData.regId}
                onChange={(e) => handleInput(e)}
                name="regId"
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Father's Name"
                value={studentData.father}
                onChange={(e) => handleInput(e)}
                name="father"
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="file"
                className="form-control"
                onChange={handleFileSelect}
                name="files"
              />
            </div>
            <div className="mb-3">
              <NewInput
                type="number"
                className="form-control"
                labelName="Age"
                value={studentData.age}
                onChange={(e) => handleInput(e)}
                name="age"
              />
            </div>
            <div className="mb-3">
              {/* <NewInput
                type="text"
                className="form-control"
                labelName="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /> */}
            </div>
          </div>
        </div>
        {updating ? (
          <button className="buttonload student_button">
            <i className="fa fa-spinner fa-spin"></i>Save Student Record
          </button>
        ) : (
          <button className="student_button">Save Student Record</button>
        )}
      </form>
                    
                    </>
                  ):"" 
                }    




                  <div className="col-lg-12">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>Student Name</th>
                          <th>Image</th>
                          <th>Father Name</th>
                          <th>CNIC</th>
                          <th>Address</th>
                          <th>Age</th>
                          <th>Student Id</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentsRecord?.results?.map((e, idx) => (
                          <Users
                            key={idx}
                            id={idx + 1}
                            image={e.image}
                            studentName={e.firstName}
                            fatherName={e.lastName}
                            cnic={e.cnic}
                            address={e.address}
                            age={e.age}
                            studentId={e.regNumber}
                            password={e.password}
                            pressDltStudent={(id)=>_handleDeleteStudent(id)}
                            _handleUpdateStudent={(id)=>_handleUpdateStudent(id)}
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
export default Students;
