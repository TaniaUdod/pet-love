import * as yup from "yup";

export const validatinSchemaAddPet = yup.object().shape({
  title: yup.string().required("Title is required"),
  name: yup.string().required("Name is required"),
  imgURL: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Invalid URL format"
    )
    .required("Image URL is required"),
  species: yup.string().required("Species is required"),
  birthday: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")
    .required("Birthday is required"),
  sex: yup.string().required("Sex is required"),
});
