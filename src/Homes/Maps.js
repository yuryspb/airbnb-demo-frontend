import React from "react";
import ReactMap from "google-map-react";

export default props => (
  <ReactMap
    bootstrapURLKeys={{
      key: process.env.REACT_APP_SECRET_CODE,
      language: "en"
    }}
    center={props.center}
    zoom={props.zoom}
  >
    {props.children}
  </ReactMap>
);
