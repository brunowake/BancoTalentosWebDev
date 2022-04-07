import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Observacao = (props) => {
  const outletcontext = useOutletContext();
  const params = useParams();
  const [obsState, setObsState] = useState({ nome: "", descricao: "" });
  //   console.log(outletcontext.state[params.stateKey][0]);

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
    <div>
      <div>
        <label htmlFor="nome">nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={obsState.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          type="text"
          name="descricao"
          value={obsState.descricao}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}>adicionar Observação</button>
      <ul>
        {outletcontext.state[params.stateKey].map((element, index) => {
          return (
            <li key={index}>
              {`obs: ${element.nome} descricao: ${element.descricao}`}
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

export default Observacao;
