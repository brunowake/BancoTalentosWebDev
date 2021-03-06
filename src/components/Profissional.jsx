import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Profissional = (props) => {
  const outletcontext = useOutletContext();
  const params = useParams();
  const [profissaoState, setProfissaoState] = useState({
    nomeEmpresa: "",
    cargo: "",
    inicio: "",
    termino: "",
    descricao: "",
  });

  const inputClassName = `col-lg-8 col-12 `;
  const labelClassName = `form-label  col-lg-4 col-12`;

  function handleChange(event) {
    setProfissaoState({
      ...profissaoState,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newArr = [...outletcontext.state[params.stateKey], profissaoState];
    outletcontext.setState((prevState) => {
      const newState = { ...prevState };
      newState[params.stateKey] = newArr;
      return newState;
    });
    setProfissaoState({
      nomeEmpresa: "",
      cargo: "",
      inicio: "",
      termino: "",
      descricao: "",
    });
  }

  function handleDeleteClick(index) {
    const newArr = [...outletcontext.state[params.stateKey]];
    newArr.splice(index, 1);
    outletcontext.setState((prevState) => {
      const newState = { ...prevState };
      newState[params.stateKey] = newArr;
      return newState;
    });
  }

  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="mb-2">
        <label htmlFor="nomeEmpresa" className={labelClassName}>
          Nome da empresa:
        </label>
        <input
          id="nomeEmpresa"
          type="text"
          name="nomeEmpresa"
          className={inputClassName}
          value={profissaoState.nomeEmpresa}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="cargo" className={labelClassName}>
          Cargo:
        </label>
        <input
          id="cargo"
          type="text"
          name="cargo"
          className={inputClassName}
          value={profissaoState.cargo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="inicio" className={labelClassName}>
          In??cio:
        </label>
        <input
          id="inicio"
          type="date"
          name="inicio"
          className={inputClassName}
          value={profissaoState.inicio}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="termino" className={labelClassName}>
          T??rmino:
        </label>
        <input
          id="termino"
          type="date"
          name="termino"
          className={inputClassName}
          value={profissaoState.termino}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="descricao" className={labelClassName}>
          Descri????o:
        </label>
        <textarea
          id="descricao"
          type="text"
          name="descricao"
          className="col-lg-8 col-12 rounded"
          value={profissaoState.descricao}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          onClick={handleClick}
          className="btn btn-primary mt-3 mb-3 border-0"
          style={{ backgroundColor: "#4682B4" }}
        >
          Adicionar trabalho
        </button>
      </div>

      {outletcontext.state[params.stateKey].map((element, index) => {
        return (
          <div className="card mb-3" key={index}>
            <h5 className="card-header">{`${element.nomeEmpresa} - ${element.cargo}`}</h5>
            <div className="card-body">
              <h5 className="card-title">De: {element.inicio}</h5>
              <h5 className="card-title">At??: {element.termino}</h5>
              <p className="card-text">{element.descricao}</p>
            </div>
            <div className="d-flex flex-row-reverse">
              <button
                className="btn btn-danger col-2 me-2 mb-2"
                onClick={(event) => {
                  event.preventDefault();
                  handleDeleteClick(index);
                }}
              >
                deletar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profissional;
