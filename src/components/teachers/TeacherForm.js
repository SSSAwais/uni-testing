import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import NewInput from "../newInput/Newinput";
import {
  gettingTeacherData,
  postTeacherData,
} from "../../controller/teacherData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TeacherForm.css";
import awais from "../../assets/image/awais.jpg";

const TeacherForm = ({ onSubmitTeacher }) => {

  const [passcode, setPasscode] = useState("");


  const [isUpdating, setIsUpdating] = useState(false);
  const [images, setImages] = useState([]);
  const [_id, set_Id] = useState("");

  const [postTeacher, setPostTeacher] = useState({
    _id:"",
    firstName: "",
    lastName: "",
    cnic: "",
    gender: "",

  });

  function handleInput(e) {
    const newTeaching = { ...postTeacher };
    newTeaching[e.target.name] = e.target.value;
    setPostTeacher(newTeaching);
    console.log(e.target.name, e.target.value);
  }
  const url = "https://good-erin-ox-suit.cyclic.app/api/teacher/add";

 
  const handleTeacher = (e) => {
    e.preventDefault();

    var formData = new FormData();
    
    formData.append("image", images);
    
    formData.append("firstName", postTeacher.firstName);
    formData.append("lastName", postTeacher.lastName);
    formData.append("cnic", postTeacher.cnic);
    formData.append("gender", postTeacher.gender);

    axios
      .post(url, formData)
      .then((resp) => {
        console.log(resp.data, "post teacher");
        // return setPostTeacher(resp.data);
      })
      .catch((err) => console.log(err));
   


    // setTimeout(() => {
    //   setIsUpdating(false);
    // }, 2000);

    // if (teacherName == " " || teaherCnic == " "|| qualification =="" || course =="" || passcode=="" ||image=="") {
    //   toast.warning("Teacher Data Not Added !", {
    //     position: "top-center",
    //     autoClose: 2000,
    //   });
    // } else {
    //   toast.success("Teacher Data Added Successfully !", {
    //     position: "top-center",
    //     autoClose: 2000,
    //   });

    // }

    // setFirstName("");
    // setLastName("");
    // setCnic("");

    // setGender("");
    // setGender("");
    // setImage("");
  };
  const handleFileSelect = (e) => {
   let arr = Object.values(e.target.files)
    console.log(arr[0]);
    
    setImages(arr[0]);
  };

  return (
    <>
      <form onSubmit={handleTeacher} className="text-center">
        <div className="row justify-content-center mt-3">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-4">
              <NewInput
                type="text"
                name="firstName"
                className="form-control"
                labelName="firstName"
                value={postTeacher.firstName}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="mb-4">
              <NewInput
                type="number"
                className="form-control"
                labelName="CNIC"
                value={postTeacher.cnic}
                onChange={(e) => handleInput(e)}
                name="cnic"
               
              />
            </div>
            <div className="mb-4">
              <NewInput
                type="text"
                className="form-control"
                labelName="Last Qualification"
                value={postTeacher.lastName}
                onChange={(e) => handleInput(e)}
                name="lastName"
             />
            </div>
            <div className="mb-4">
              <NewInput
                type="text"
                className="form-control"
                labelName="Course"
                value={postTeacher.gender}
                onChange={(e) => handleInput(e)}
                name="gender"
              
              />
            </div>
            <div className="mb-4">
              <NewInput
                type="file"
                className="form-control"
                onChange={handleFileSelect}
                name="files"
              />
            </div>
            <div className="mb-4">
              {/* <NewInput
                type="text"
                className="form-control"
                labelName="Teacher Reg Id"
                value={postTeacher._id}
             
              /> */}
            </div>
            <div className="mb-5">
              {/* <NewInput
                type="text"
                className="form-control"
                labelName="Passcode"
                value={passcode}
                onChange={(e) => handleInput(e)}
              /> */}
            </div>
          </div>
        </div>
        {isUpdating ? (
          <button className="buttonload teacher_button">
            <i className="fa fa-spinner fa-spin"></i>Saving Teacher Data
          </button>
        ) : (
          <button className="teacher_button">Save Teacher Data</button>
        )}
      </form>
      <ToastContainer />
    </>
  );
};
export default TeacherForm;
