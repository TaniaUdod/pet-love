import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAddPet } from "../../store/auth/operations";
import { selectTypes } from "../../store/notices/selectors";
import { getTypes } from "../../store/notices/operations";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleDatePicker } from "../../helpers/formatDatePicker";
import { validatinSchemaAddPet } from "../../helpers/validationSchemaAddPet";
import Select from "react-select";
import sprite from "../../images/sprite.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import {
  AddAvatarInput,
  AddPetFormContainer,
  BoxContainer,
  DatePickerWrapper,
  Error,
  FemaleLi,
  GendersList,
  Image,
  Input,
  InputPetImageURL,
  InputWrap,
  InvisibleInput,
  Label,
  MaleLi,
  MultipleLi,
  Title,
  UploadContainer,
  StyledDatePicker,
  SelectContainer,
  ButtonBack,
  ButtonSubmit,
  ButtonWrap,
  InputLabel,
} from "./AddPetForm.styled";

const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sexPet, setSexPet] = useState("unknown");
  const [petType, setPetType] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [petImageURL, setPetImageURL] = useState("");

  const species = useSelector(selectTypes);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validatinSchemaAddPet),
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    if (sexPet !== "unknown") {
      setValue("sex", sexPet);
    }

    if (petType) {
      setValue("species", petType);
    }

    if (birthDate) {
      setValue("birthday", birthDate);
    }
  }, [birthDate, petType, setValue, sexPet]);

  const cloudURL = process.env.REACT_APP_CLOUDINARY_URL;
  const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;

  const handleUploadAvatar = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);
    fetch(cloudURL, { method: "POST", body: formData })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Upload failed");
        }
        return res.json();
      })
      .then((data) => {
        const fileURL = URL.createObjectURL(file);
        setPetImageURL(fileURL);
        setValue("imgURL", data.secure_url);
      })
      .catch((error) => console.log("Upload error:", error.message));
  };

  const handleChooseSex = (event) => {
    const choosenValue = event.currentTarget.dataset.value;
    setSexPet(choosenValue);
  };

  const speciesData = [
    ...species?.map((item) => ({
      value: item,
      label: item.charAt(0).toUpperCase() + item.slice(1),
    })),
  ];

  const handleByType = (event) => setPetType(event.value);

  const selectValue =
    petType === null
      ? null
      : speciesData?.find((option) => option.value === petType);

  const onSubmit = (data) => {
    dispatch(userAddPet(data));
    navigate("/profile");
  };

  return (
    <AddPetFormContainer>
      <Title>
        Add my pet /<span>Personal details</span>
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <GendersList>
          <FemaleLi
            data-value="female"
            onClick={handleChooseSex}
            datavalue={sexPet}
          >
            <svg width="20" height="20" datavalue={sexPet}>
              <use href={`${sprite}#icon-female`}></use>
            </svg>
          </FemaleLi>
          <MaleLi
            data-value="male"
            onClick={handleChooseSex}
            datavalue={sexPet}
          >
            <svg width="20" height="20" datavalue={sexPet}>
              <use href={`${sprite}#icon-male`}></use>
            </svg>
          </MaleLi>
          <MultipleLi
            data-value="multiple"
            onClick={handleChooseSex}
            datavalue={sexPet}
          >
            <svg width="20" height="20" datavalue={sexPet}>
              <use href={`${sprite}#icon-reproductive`}></use>
            </svg>
          </MultipleLi>
        </GendersList>

        <InvisibleInput type="text" {...register("sex")} />
        {errors.sex && <Error>{errors.sex.message}</Error>}

        <Image>
          {petImageURL !== "" ? (
            <img src={petImageURL} alt="Pet's avatar" />
          ) : (
            <svg width="34" height="34">
              <use href={`${sprite}#icon-foot-print`}></use>
            </svg>
          )}
        </Image>

        <UploadContainer>
          <InputLabel>
            <InputPetImageURL
              type="text"
              {...register("imgURL")}
              placeholder="Enter URL"
            />
            {errors.imgURL && <Error>{errors.imgURL.message}</Error>}
          </InputLabel>
          <Label>
            <AddAvatarInput
              type="file"
              name="avatarFile"
              onChange={handleUploadAvatar}
            />
            <svg width="16" height="16">
              <use href={`${sprite}#icon-upload-cloud`}></use>
            </svg>
          </Label>
        </UploadContainer>

        <InputWrap>
          <Input type="text" {...register("title")} placeholder="Title" />
          {errors.title && <Error>{errors.title.message}</Error>}
        </InputWrap>

        <InputWrap>
          <Input type="text" {...register("name")} placeholder="Pet's Name" />
          {errors.name && <Error>{errors.name.message}</Error>}
        </InputWrap>

        <BoxContainer>
          <div>
            <Controller
              control={control}
              name="birthday"
              render={({ field }) => (
                <DatePickerWrapper>
                  <StyledDatePicker
                    {...field}
                    calendarStartDay={1}
                    selected={field.value ? new Date(field.value) : null}
                    dateFormat="yyyy-MM-dd"
                    onChange={(date) =>
                      handleDatePicker(date, setBirthDate, setValue)
                    }
                    placeholderText="0000-00-00"
                    autoComplete="off"
                  />
                  <svg width="18" height="18" fill="none" stroke="currentColor">
                    <use href={`${sprite}#icon-calendar`} />
                  </svg>
                </DatePickerWrapper>
              )}
            />
            <InvisibleInput type="text" {...register("birthday")} />
            {errors.birthday && <Error>{errors.birthday.message}</Error>}
          </div>

          <SelectContainer>
            <Select
              value={selectValue}
              onChange={handleByType}
              options={speciesData}
              placeholder={"Type of pet"}
              isClearable
            />
            <svg width="18" height="18" fill="none" stroke="currentColor">
              <use href={`${sprite}#icon-arrow-down`} />
            </svg>
            <InvisibleInput type="text" {...register("species")} />
            {errors.species && <Error>{errors.species.message}</Error>}
          </SelectContainer>
        </BoxContainer>

        <ButtonWrap>
          <ButtonBack to={"/profile"}>Back</ButtonBack>
          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </ButtonWrap>
      </form>
    </AddPetFormContainer>
  );
};

export default AddPetForm;
