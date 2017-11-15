import React from "react";
import GoogleMap from "google-map-react";
import styled from "styled-components";

export default props => {
  return (
    <GoogleMap
      defaultCenter={props.center}
      defaultZoom={props.zoom}
      bootstrapURLKeys={{
        key: "AIzaSyCkMgp7f5HRqQrShfGIitsLFJWcB3F1c6c",
        language: "en"
      }}
    />
  );
};
