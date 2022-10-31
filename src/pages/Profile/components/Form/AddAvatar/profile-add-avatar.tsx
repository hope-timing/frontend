import React, { ForwardedRef, forwardRef } from "react";
import { useAddAvatar } from "../../../hooks/useAddAvatar";

export const ProfileAddAvatar = forwardRef(
  ({}, ref: ForwardedRef<HTMLInputElement>) => {
    const { onAvatarChange } = useAddAvatar();

    return (
      <input
        type="file"
        onChange={(e) =>
          onAvatarChange(e.target.files?.length ? e.target.files[0] : undefined)
        }
        ref={ref}
        accept=""
        hidden
      />
    );
  }
);
