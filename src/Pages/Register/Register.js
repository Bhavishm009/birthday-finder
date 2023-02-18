import React from "react";
import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import { useState } from "react";
import Style from "./Register.module.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { Data } from "../../ConstData";
import Swal from "sweetalert2";

function Register() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [age, setAge] = useState("");

 

  function handleSubmit() {
    const Deatail = {
      id: nanoid(3),
      firstName,
      lastName,
      DOB:birthday,
      age,
    };
    Data.push(Deatail);
   Swal.fire(
    `Welcome ,${firstName}`,
    'You Cheak BirthDay On BirthDay Page',
    'success'
   )
  }
  function handleFristName(e) {
    setfirstName(e.target.value);
    console.log(firstName);
  }
  function handleLastName(e) {
    setlastName(e.target.value);
    console.log(lastName);
  }
  function handleBirthDay(e) {
    setBirthDay(e.target.value);
    console.log(birthday);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }

  return (
    <>
      <div className={Style.mainContainer}>
        <h4> Fill Your Deatails</h4>
        <Input type="text" placeholder="Name" onChange={handleFristName} />
        <Input placeholder="Surname" onChange={handleLastName} />
        <Input type="date" onChange={handleBirthDay} />
        <Input type="number" onChange={handleAge} />
        <Button Text="Submit" onClick={handleSubmit} />
      </div>
      <Link to="/BirthdayPage">
        <a>Deatail</a>
      </Link>
    </>
  );
}
export default Register;
{

let ms = Date.now();
console.log(ms)


}