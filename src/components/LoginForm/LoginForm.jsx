import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { logIn } from "../../store/auth/operations";
import sprite from "../../images/sprite.svg";
import {
  Button,
  EmailWrap,
  Error,
  Input,
  InputWrap,
  PasswordWrap,
  SecureMessage,
} from "./LoginForm.styled";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handlePasswordChange = (event) => {
    setPasswordLength(event.target.value.length);
  };

  const schema = yup.object().shape({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(logIn({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrap>
        <EmailWrap>
          <Input
            placeholder="Email"
            {...register("email")}
            haserror={errors.email}
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
            // secure={passwordLength >= 11}
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
      </InputWrap>

      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;
