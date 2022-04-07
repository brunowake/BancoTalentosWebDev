import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Observacao = (props) => {
  const outletcontext = useOutletContext();
  const params = useParams();
  const [obsState, setObsState] = useState({ nome: "", descricao: "" });
  const inputClassName = `col-lg-8 col-12 rounded-pill`;
  const labelClassName = `form-label  col-lg-4 col-12`;

  function handleChange(event) {
    setObsState({ ...obsState, [event.target.name]: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    const newArr = [...outletcontext.state[params.stateKey], obsState];
    outletcontext.setState((prevState) => {
      const newState = { ...prevState };
      newState[params.stateKey] = newArr;
      return newState;
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
        <label htmlFor="nome" className={labelClassName}>
          nome
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          className={inputClassName}
          value={obsState.nome}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="descricao" className={labelClassName}>
          Descrição
        </label>
        <input
          id="descricao"
          type="text"
          name="descricao"
          className={inputClassName}
          value={obsState.descricao}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick} className="btn btn-primary mt-3 mb-3">
        Adicionar Observação
      </button>

      {outletcontext.state[params.stateKey].map((element, index) => {
        return (
          <div className="card mb-3" key={index}>
            <h5 className="card-header">Observação</h5>
            <div className="card-body">
              <h5 className="card-title">{element.nome}</h5>
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

export default Observacao;
