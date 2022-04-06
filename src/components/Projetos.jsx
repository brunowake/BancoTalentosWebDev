import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
const Projetos = (props) => {
  const outletcontext = useOutletContext();
  const params = useParams();
  const [projetosState, setProjetosState] = useState({
    nome: "",
    url: "",
    github: "",
    descricao: "",
  });

  function handleChange(event) {
    setProjetosState({
      ...projetosState,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newArr = [...outletcontext.state[params.stateKey], projetosState];
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
        <label htmlFor="nome">Nome do Projeto:</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={projetosState.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="url">Url:</label>
        <input
          id="url"
          type="text"
          name="url"
          value={projetosState.url}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="github">Github:</label>
        <input
          id="github"
          type="text"
          name="github"
          value={projetosState.github}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descricao:</label>
        <textarea
          id="descricao"
          type="text"
          name="descricao"
          value={projetosState.descricao}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleClick}>adicionar Projeto</button>

      <ul>
        {outletcontext.state[params.stateKey].map((element, index) => {
          return (
            <li key={index}>
              {`nome: ${element.nome} url: ${element.url} github: ${element.github} descricao:${element.descricao} `}
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

export default Projetos;
