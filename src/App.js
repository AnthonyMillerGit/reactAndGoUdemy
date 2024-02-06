import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(false);
  const [crowd, setCrowd] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  const toggleTrue = () => {
    setIsTrue(!isTrue);
  };

  useEffect(() => {
    console.log("useEffect fired!");

    let people = [
      { 
        id: 1,
        firstName: "Mary",
        lastName: "Jones",
        dob: "1997-05-02",
      },
      { 
        id: 2,
        firstName: "Jack",
        lastName: "Smith",
        dob: "1999-02-04",
      },
    ]
    setCrowd(people)
  }, []);

  return (
    <Fragment>
      <hr />
      <h1 className="h1-green">{props.msg}</h1>
      <hr />
      {isTrue ? <h1>True</h1> : <h1>False</h1>}
      <hr />
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
        Change True And False
      </a>
      <hr />

        <form autoComplete="off">
          <div className="mb-3">
            <label className="form-label" htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="first-name-new"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
        </form>

        <div>
          First Name: {firstName}<br />
          Last Name: {lastName}<br />
          Date of Birth: {dob}<br />
        </div>
      <hr />
      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((m) => (
          <li key={m.id} className="list-group-item">
            {m.firstName} {m.lastName}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default HelloWorld;
