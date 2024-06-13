import * as yup from "yup";

export const validationSchemaEditUser = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  avatar: yup
    .string()
    .url("Invalid URL format")
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Invalid image URL"
    )
    .required("Avatar URL is required"),
  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, "Phone number must match the format +380XXXXXXXXX")
    .required("Phone number is required"),
});
