import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
const Formacao = (props) => {
  const outletcontext = useOutletContext();
  const [formacaoState, setFormacaoState] = useState({
    instituicao: "",
    nomeCurso: "",
    inicio: "",
    termino: "",
    descricao: "",
  });

  const params = useParams();

  function handleChange(event) {
    setFormacaoState({
      ...formacaoState,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newArr = [...outletcontext.state[params.stateKey], formacaoState];
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
        <label htmlFor="instituicao">Instuição</label>
        <input
          id="instituicao"
          type="text"
          name="instituicao"
          value={formacaoState.instituicao}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="nomeCurso">Nome do curso</label>
        <input
          id="nomeCurso"
          type="text"
          name="nomeCurso"
          value={formacaoState.nomeCurso}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="inicio">Data Inicio</label>
        <input
          id="inicio"
          type="date"
          name="inicio"
          value={formacaoState.inicio}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="termino">Data Conclusão</label>
        <input
          id="termino"
          type="date"
          name="termino"
          value={formacaoState.termino}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          type="date"
          name="descricao"
          value={formacaoState.descricao}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}>adicionar Formação</button>

      <ul>
        {outletcontext.state[params.stateKey].map((element, index) => {
          return (
            <li key={index}>
              {`instituicao: ${element.instituicao} nomeCurso: ${element.nomeCurso} inicio: ${element.inicio} termino:${element.termino} descricao: ${element.descricao}`}
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

export default Formacao;
