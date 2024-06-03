import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { register as registerUser } from "../../store/auth/operations";
import sprite from "../../images/sprite.svg";
import {
  Button,
  EmailWrap,
  Error,
  Input,
  InputWrap,
  PasswordWrap,
  SecureMessage,
} from "./RegistrationForm.styled";

const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState(false);
  const [passwordLength, setPasswordLength] = useState(0);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleToggleConfirmPassword = () => {
    setIsPasswordConfirmVisible((prevState) => !prevState);
  };

  const handlePasswordChange = (event) => {
    setPasswordLength(event.target.value.length);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "Enter a valid Email"
      )
      .required("Enter a valid Email"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { confirmPassword, ...registrationData } = data;
    try {
      await dispatch(registerUser(registrationData));
      navigate("/profile");
    } catch (error) {
      console.error("Failed to register user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrap>
        <div>
          <Input placeholder="Name" {...register("name")} />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>

        <EmailWrap>
          <Input
            placeholder="Email"
            {...register("email")}
            hasError={errors.email}
          />
          {errors.email && (
            <svg>
              <use href={`${sprite}#icon-cross-red`} />
            </svg>
          )}
          {errors.email && <Error>{errors.email.message}</Error>}
        </EmailWrap>

        <PasswordWrap>
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
            onChange={handlePasswordChange}
            isSecure={passwordLength >= 11}
          />
          {isPasswordVisible ? (
            <svg fill="#f6b83d" onClick={handleTogglePassword}>
              <use href={`${sprite}#icon-eye`} />
            </svg>
          ) : (
            <svg onClick={handleTogglePassword}>
              <use href={`${sprite}#icon-eye-off`} />
            </svg>
          )}
          {errors.password && passwordLength < 7 && (
            <Error>{errors.password.message}</Error>
          )}
          {passwordLength >= 11 && (
            <div>
              <svg>
                <use href={`${sprite}#icon-check`} />
              </svg>
              <SecureMessage>Password is secure</SecureMessage>
            </div>
          )}
        </PasswordWrap>

        <PasswordWrap>
          <Input
            type={isPasswordConfirmVisible ? "text" : "password"}
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
          {isPasswordConfirmVisible ? (
            <svg fill="#f6b83d" onClick={handleToggleConfirmPassword}>
              <use href={`${sprite}#icon-eye`} />
            </svg>
          ) : (
            <svg onClick={handleToggleConfirmPassword}>
              <use href={`${sprite}#icon-eye-off`} />
            </svg>
          )}
          {errors.confirmPassword && (
            <Error>{errors.confirmPassword.message}</Error>
          )}
        </PasswordWrap>
      </InputWrap>

      <Button type="submit">Registration</Button>
    </form>
  );
};

export default RegistrationForm;
