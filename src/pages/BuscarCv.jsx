import React, { useState } from "react";
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
    <div>
      <input type="text" value={codigoCadastro} onChange={handleChange} />
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
};

export default BuscarCv;
