import React from "react";

const UserDetails = {
  name: " Roney Rollex",
  imageUrl: "https://randomuser.me/api/portraits/lego/4.jpg",
  imageSize: 90,
};

export const UserImage = () => {
  return (
    <>
      <div>{UserDetails.name}</div>
      <img
        src={UserDetails.imageUrl}
        alt={"Image of" + UserDetails.name}
        style={{ width: UserDetails.imageSize , height: UserDetails.imageSize }}
      />
    </>
  );
};
