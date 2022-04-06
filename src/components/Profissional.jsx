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
    <div>
      <div>
        <label htmlFor="nomeEmpresa">Nome da empresa:</label>
        <input
          id="nomeEmpresa"
          type="text"
          name="nomeEmpresa"
          value={profissaoState.nomeEmpresa}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cargo">Cargo:</label>
        <input
          id="cargo"
          type="text"
          name="cargo"
          value={profissaoState.cargo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="inicio">inicio:</label>
        <input
          id="inicio"
          type="date"
          name="inicio"
          value={profissaoState.inicio}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="termino">termino:</label>
        <input
          id="termino"
          type="date"
          name="termino"
          value={profissaoState.termino}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="descricao">descricao:</label>
        <textarea
          id="descricao"
          type="text"
          name="descricao"
          value={profissaoState.descricao}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}>adicionar Formação</button>

      <ul>
        {outletcontext.state[params.stateKey].map((element, index) => {
          return (
            <li key={index}>
              {`nomeEmpresa: ${element.nomeEmpresa} cargo: ${element.cargo} inicio: ${element.inicio} termino:${element.termino} descricao: ${element.descricao}`}
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  handleDeleteClick(index);
                }}
              >
                deletar
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profissional;
