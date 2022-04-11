import React from "react";
import { Alert, Button } from "react-bootstrap";

const AlertForm = (props) => {
  const { show, errors } = props;
  const keys = Object.keys(errors);
  return (
    <Alert show={show} variant="danger">
      <Alert.Heading>Algo de errado não está certo</Alert.Heading>

      {keys.map((key, index) => {
        return <p key={index}>{errors[key]}</p>;
      })}

      <hr />
      <div className="d-flex justify-content-end"></div>
    </Alert>
  );
};

export default AlertForm;
