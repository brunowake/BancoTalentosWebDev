import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuscarCv = () => {
  const [codigoCadastro, setCodigoCadastro] = useState("");
  const navigate = useNavigate();

  function handleClick(event) {
    navigate(`/editar/${codigoCadastro}`);
  }

  function handleChange(event) {
    setCodigoCadastro(event.target.value);
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <input
        type="text"
        value={codigoCadastro}
        onChange={handleChange}
        placeholder="código de registro"
      />
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
};

export default BuscarCv;
