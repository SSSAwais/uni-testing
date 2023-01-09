import React, { Component } from 'react';
const CourseListing=(props)=>{
    const {id,coursetitle,coursecode,subjectcode,teacher,credithours,pressDltCourse}=props;
    return(
        <>
            <tr>
                <td>{id}</td>
                <td><p>{coursetitle}</p></td>
                <td><p>{coursecode}</p></td>
                <td><p>{subjectcode}</p></td>
                <td><p>{teacher}</p></td>
                <td><p>{credithours}</p></td>
                <td><i className="fa-solid fa-circle-minus" title="delete course" onClick={()=>pressDltCourse(id)}></i></td>
            </tr>
        </>

    )
       
}
export default CourseListing