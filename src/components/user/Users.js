import React, { Component } from "react";
const Users = (props) => {
  const {id,studentName,image,fatherName ,cnic,address,age,studentId,password } = props;
  return (
    <>
      <tr>
      <td>{id}</td>
      <td>{studentName}</td>
      <td><img src={image} alt="iamges"/></td>
      <td>{fatherName}</td>
      <td>{cnic}</td>
      <td>{address}</td>
      <td>{age}</td>
      <td>{studentId}</td>
      <td>{password}</td>
      </tr>
    </>
  );
};
export default Users;
