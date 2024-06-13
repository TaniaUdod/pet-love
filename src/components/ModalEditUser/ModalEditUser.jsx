import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userEdit } from "../../store/auth/operations";
import { validationSchemaEditUser } from "../../helpers/validationSchemaEditUser";
import sprite from "../../images/sprite.svg";
import {
  AvatarContainer,
  Button,
  CloseButton,
  Error,
  Img,
  Input,
  InputAvatar,
  InputAvatarURL,
  InputWrap,
  Label,
  ModalContent,
  ModalOverlay,
  SpanImg,
  Title,
} from "./ModalEditUser.styled";

const ModalEditUser = ({ onClose, user, imageURL, setImageURL }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "visible";
    };
  }, [onClose]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaEditUser),
  });

  const onSubmit = (data) => {
    dispatch(userEdit(data));
    onClose();
  };

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
        setImageURL(fileURL);
        setValue("avatar", data.secure_url);
      })
      .catch((error) => console.log("Upload error:", error.message));
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <svg>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </CloseButton>

        <Title>Edit information</Title>
        {user.avatar ? (
          <Img src={imageURL || user.avatar} alt={user.name} />
        ) : (
          <SpanImg>
            <svg width="40" height="40" fill="#f6b83d" stroke="#f6b83d">
              <use href={`${sprite}#icon-user`} />
            </svg>
          </SpanImg>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <AvatarContainer>
            <Label>
              <InputAvatarURL
                type="text"
                {...register("avatar")}
                defaultValue={user.avatar || "Avatar URL"}
              />
              {errors.avatar && <Error>{errors.avatar.message}</Error>}
            </Label>
            <Label>
              <InputAvatar
                type="file"
                name="avatarFile"
                onChange={handleUploadAvatar}
              />
              <svg width="18" height="18">
                <use href={`${sprite}#icon-upload-cloud`}></use>
              </svg>
            </Label>
          </AvatarContainer>

          <InputWrap>
            <div>
              <Input
                type="text"
                {...register("name")}
                defaultValue={user.name}
              />
              {errors.name && <Error>{errors.name.message}</Error>}
            </div>

            <div>
              <Input
                type="email"
                {...register("email")}
                defaultValue={user.email}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </div>

            <div>
              <Input
                type="tel"
                {...register("phone")}
                defaultValue={user.phone}
              />
              {errors.phone && <Error>{errors.phone.message}</Error>}
            </div>
          </InputWrap>

          <Button type="submit">Save</Button>
        </form>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default ModalEditUser;
