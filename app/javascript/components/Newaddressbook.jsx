import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Newaddressbook = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [email, SetEmail] = useState("")
 

  const stripHtmlEntities = (str) => {
    return String(str)
      .replace(/\n/g, "<br> <br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v1/addressbook/create";

    if (name.length == 0 || address.length == 0 || phone.length == 0 || age.length == 0 || gender.length == 0 || email.length == 0)
      return;

    const body = {
      name,
      address,
      phone,
      age,
      gender,
      email
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate(`/addressbooks`))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new addressbook to our awesome address collection.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="addressbookName">User name</label>
              <input
                type="text"
                name="name"
                id="addressbookName"
                className="form-control"
                required
                onChange={(event) => onChange(event, setName)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressbookEmail">Email</label>
              <input
                type="text"
                name="email"
                id="addressbookEmail"
                className="form-control"
                required
                onChange={(event) => onChange(event, SetEmail)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressbookAddress">Address</label>
              <input
                type="text"
                name="address"
                id="addressbookAddress"
                className="form-control"
                required
                onChange={(event) => onChange(event, setAddress)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressbookPhone">Phone</label>
              <input
                type="text"
                name="phone"
                id="addressbookPhone"
                className="form-control"
                required
                onChange={(event) => onChange(event, setPhone)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressbookAge">Age</label>
              <input
                type="text"
                name="age"
                id="addressbookAge"
                className="form-control"
                required
                onChange={(event) => onChange(event, setAge)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressbookGender">Gender</label>
              <input
                type="text"
                name="gender"
                id="addressbookGender"
                className="form-control"
                required
                onChange={(event) => onChange(event, setGender)}
              />
            </div>

         
            <button type="submit" className="btn custom-button mt-3">
              Create Addressbook
            </button>
            <Link to="/addressbooks" className="btn btn-link mt-3">
              Back to Addressbooks
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newaddressbook;