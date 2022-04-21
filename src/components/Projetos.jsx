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
  const inputClassName = `col-lg-8 col-12 rounded-pill`;
  const labelClassName = `form-label  col-lg-4 col-12`;

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
    <div className="d-flex justify-content-center flex-column">
      <div className="mb-2">
        <label htmlFor="nome" className={labelClassName}>
          Nome do Projeto:
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          className={inputClassName}
          value={projetosState.nome}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="url" className={labelClassName}>
          Url:
        </label>
        <input
          id="url"
          type="text"
          name="url"
          className={inputClassName}
          value={projetosState.url}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="github" className={labelClassName}>
          Github:
        </label>
        <input
          id="github"
          type="text"
          name="github"
          className={inputClassName}
          value={projetosState.github}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="descricao" className={labelClassName}>
          Descrição:
        </label>
        <textarea
          id="descricao"
          type="text"
          name="descricao"
          className="col-lg-8 col-12 rounded"
          value={projetosState.descricao}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button onClick={handleClick} className="btn btn-primary mt-3 mb-3">
          Adicionar Projeto
        </button>
      </div>

      {outletcontext.state[params.stateKey].map((element, index) => {
        return (
          <div className="card mb-3" key={index}>
            <h5 className="card-header">{element.nome}</h5>
            <div className="card-body">
              <h5 className="card-title">URL: {element.url}</h5>
              <h5 className="card-title">Github: {element.github}</h5>
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

export default Projetos;
