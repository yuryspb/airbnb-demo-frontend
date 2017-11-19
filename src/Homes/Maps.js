import React from "react";
import GoogleMap from "google-map-react";

export default props => {
  return (
    <GoogleMap
      defaultCenter={props.center}
      defaultZoom={props.zoom}
      bootstrapURLKeys={{
        key: process.env.REACT_APP_SECRET_CODE,
        language: "en"
      }}
    />
  );
};
