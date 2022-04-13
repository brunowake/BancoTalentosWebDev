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
    <div className="position-absolute top-50 start-50 translate-middle w-50">
      <p className="text-center fs-6 fw-bold">
        Digite o código de registro para editar ou deletar seu CV:
      </p>
      <div className="d-flex justify-content-center mt-4">
        <input
          type="text"
          value={codigoCadastro}
          onChange={handleChange}
          placeholder="código de registro"
        />
        <button
          className="btn btn-success border-0 ms-3"
          style={{ backgroundColor: "#556B2F" }}
          onClick={handleClick}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default BuscarCv;
