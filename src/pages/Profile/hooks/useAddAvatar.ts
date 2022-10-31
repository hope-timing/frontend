import React from "react";
import { useAlert } from "react-alert";
import { EImgMimeType } from "../../../enums/mimeTypes";
import { checkFileType } from "../../../functions/checkFileType";

export const useAddAvatar = () => {
  const alert = useAlert();

  const onAvatarChange = (file?: File) => {
    if (checkFileType(Object.values(EImgMimeType), file)) {
      downloadAvatar(file);
      alert.success("Аватар успешно добавлен! :)");
    } else {
      alert.error("Загружать можно только картинки :(");
    }
  };

  function downloadAvatar(file?: File) {
    const formData = new FormData();

    if (file) {
      formData.append("avatar", file);
      console.log(formData);
    }
  }

  return { onAvatarChange };
};
