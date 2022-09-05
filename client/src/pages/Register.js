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
  isMember: true,
  showAlert: false,
};

export const Register = () => {
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();
  const { displayAlert, setupUser, user } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, password, isMember } = values;

    if (!password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, password };
    if (isMember) {
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
      <form className="form" onSubmit={onSubmit}>
        <div>PontexIM</div>
        <FormRow
          type="name"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
};
