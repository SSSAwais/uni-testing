import React, { Component } from 'react';
import './ReportList.css';

const ReportList=(props)=>{
const {id,courseTitle,coursecode,subjectcode,credithour,handleCourseAttendance}=props;
    return(
        <>
        <tr>
            <td>{id}</td>
            <td>{courseTitle}</td>
            <td>{coursecode}</td>
            <td>{subjectcode}</td>
            <td>{credithour}</td>
            
            <td><i className="fa-solid fa-hand-point-right" onClick={handleCourseAttendance}></i></td>
        </tr>
        </>
    )
}
export default ReportList