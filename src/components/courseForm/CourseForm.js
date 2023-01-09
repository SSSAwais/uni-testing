import React, { useState, useEffect } from "react";
import axios from "axios";
import NewInput from "../newInput/Newinput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CourseForm.css";
import gettingCourseData from "../../controller/courseData";

const CourseForm = ({ onSubmitCourseData }) => {
  const [postCourse, setPostCourse] = useState({
    name: "",
    subCode: "",
  });

  function _handleCourseInput(e) {
    const newCourse = { ...postCourse };
    newCourse[e.target.name] = e.target.value;
    setPostCourse(newCourse);
  }

  let url = "https://dark-gray-agouti-kit.cyclic.app/api/subject";
  const handleCourse = (e) => {
    e.preventDefault();
    console.log(postCourse, "hello");
  
    // const formData = new FormData();
    // // Object.keys(object).forEach(key => formData.append(key, object[key]));

    var formData = new FormData();
    //   //  console.log("object===============", object)
      
    formData.append("name", postCourse.name);
    formData.append("subCode", postCourse.subCode);
    // axios.post("https://good-erin-ox-suit.cyclic.app/api/subject",
    //  {    "data":{
    //       "name": postCourse.name,
    //       "subCode":postCourse.subCode
    //  }
    // },{
    //   headers:{
    //     'Content-Type': 'application/json',
    //     "accept": '*/*',
    //     'Access-Control-Allow-Origin': "*"
    //   }
    // }





    // / POST request using fetch()
 fetch("https://good-erin-ox-suit.cyclic.app/api/subject", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
   
      formData,
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Headers":"https://localhost:3000"
    }
}).then((resp)=>{
      console.log(resp.data);
      // setPostCourse(resp.data)
    }
    
    ).catch((err)=>{
      console.log(err);
    })
  
    // var data = JSON.stringify({
    //   "data": {
    //     "name": postCourse.name,
    //     "subCode":postCourse.subCode
    //   }
    // });
    
    // var config = {
    //   method: 'post',
    //   url: 'https://good-erin-ox-suit.cyclic.app/subject',
    //   headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };
    
    // axios.post(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    



    // const data = {
    //    name: postCourse.name,
    //   subCode: postCourse.subCode,
    // };
    // axios
    //   .post("http://qrappmaster.herokuapp.com/api/subject", data)
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // gettingCourseData(onSubmitCourseData);

    // if (title == " " || code == " "|| subCode =="" || teacher =="" || creditHours=="") {
    //     toast.warning("Course Data Not Added !", {
    //       position: "top-center",
    //       autoClose: 2000,
    //     });
    //   } else {
    //     toast.success("Course Data Added Successfully !", {
    //       position: "top-center",
    //       autoClose: 2000,
    //     });
    //   }

    // setTitle("");
    // setCode("");
    // setSubCode("");
    // setTeacher("");
    // setCreditHours("");
  };

  return (
    <>
      <form className="text-center" onSubmit={handleCourse}>
        <div className="row justify-content-center mb-3">
          <div className="col-lg-5 col-md-8 col-sm-12">
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Course Title"
                value={postCourse.name}
                onChange={(e) => _handleCourseInput(e)}
                name="name"
              />
            </div>
            {/*  <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Course Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              
            </div>
            */}
            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Subject Code"
                value={postCourse.subCode}
                onChange={(e) => _handleCourseInput(e)}
                name="subCode"
              />
            </div>
            {/*

            <div className="mb-3">
              <NewInput
                type="text"
                className="form-control"
                labelName="Teacher"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </div>
            */}
            {/*
            <div className="mb-3">
              <NewInput
                type="number"
                className="form-control"
                labelName="Credit Hours"
                value={creditHours}
                onChange={(e) => setCreditHours(e.target.value)}
              />
            </div>
            */}
          </div>
        </div>
        <button className="course_save">Save Course Data</button>
      </form>
      <ToastContainer />
    </>
  );
};
export default CourseForm;
