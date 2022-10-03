import React from "react";
import Wrapper from "../assests/Wappers/RegisterPage";
import FormRow from "../components/FormRow.js";
import Alert from "../components/Alert.js";

import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  password: "",
  email: "",
  isMember: false,
  // showAlert: false,
};

export const Register = () => {
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();
  const { displayAlert, setupUser, user, showAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, password, isMember, email } = values;

    if (!name || !password || (isMember && !email)) {
      displayAlert();
      return;
    }

    const currentUser = { name, password };
    if (isMember === false) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Logging in User...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Registering User...",
      });
    }
  };
  const loginDemo = () => {
    let currentUser = {
      name: "Demo User",
      password: "123456",
    };

    setupUser({
      currentUser: currentUser,
      endPoint: "login",
      alertText: "Logging in User...",
    });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [navigate, user]);

  return (
    <Wrapper>
      <div className="demo-container">
        <button onClick={loginDemo} className="demo-btn">
          Demo User
        </button>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <h1>PontexIM</h1>
        {showAlert && <Alert />}
        <FormRow
          type="name"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        {values.isMember && (
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          {values.isMember ? "Register" : "Login"}
        </button>
        <p>
          {values.isMember ? "Already a member?" : "Not a memeber yet?"}{" "}
          <button onClick={toggleMember} type="button" className="toggle-btn">
            {values.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
