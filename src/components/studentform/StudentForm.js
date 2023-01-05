import React, { Component, useEffect, useState } from "react";
import "./StudentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewInput from "../newInput/Newinput";
import gettStudentData from "../../controller/studentData";
import axios from "axios";

const StudentForm = ({ onSubmitStudent }) => {
  const [message, setMessage] = useState(false);

  const [studentName, setStudentName] = useState("");
  const [father, setFather] = useState("");
  const [cnic, setCnic] = useState("");
  const [image, setImage] = useState([]);
  const [address, setAddress] = useState([]);
  const [age, setAge] = useState("");
  const [regId, setRegid] = useState("");
  const [updating, setUpdating] = useState(false);
  const [password, setPassword] = useState("");
  const [studentReocrd, setStudentRecord] = useState();

  const [studentData,setStudentData]=useState({
    studentName:"",
    father:"",
    cnic:"",
    address:"",
    age:"",
    regId:""
  })

  function handleInput(e){
    const NewStudent={...studentData};
    NewStudent[e.target.name]=e.target.value;
    setStudentData(NewStudent);
  }


  const handleSubmiting = (e) => {
    e.preventDefault();
    setUpdating(false);
    console.log(studentData,"student data");
    const formData=new FormData();

    formData.append("firstName",studentData.studentName);
    formData.append("lastName",studentData.father);
    formData.append("regNumber",studentData.regId);

  

    // if (studentName == " " || father == " "|| cnic =="" || image =="" || address=="" ||age=="" ||regId==""||password=="" ) {
    //   setMessage(true);
    //   toast.warning("Teacher Data Not Added !", {
    //     position: "top-center",
    //     autoClose: 2000,
    //   });
    // } else {
    //   setMessage(false);

    //   toast.success("Teacher Data Added Successfully !", {
    //     position: "top-center",
    //     autoClose: 2000,
    //   });
    // }
    // gettStudentData(onSubmitStudent);
    // setStudentName("");
    // setFather("");
    // cnic("");
    // image("");
    // setAddress("");
    // setRegid("");
    // setPassword("");
  };
  const handleFileSelect = (e) => {
    console.log(e.target.files);
    setImage(e.target.files);
  };

  return (
    <>
      <form onSubmit={handleSubmiting} className="text-center">
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
      <ToastContainer />
    </>
  );
};
export default StudentForm;

