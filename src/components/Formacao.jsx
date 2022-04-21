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
  const inputClassName = `col-lg-8 col-12 `;
  const labelClassName = `form-label  col-lg-4 col-12`;

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

    setFormacaoState({
      instituicao: "",
      nomeCurso: "",
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
        <label htmlFor="instituicao" className={labelClassName}>
          Instuição
        </label>
        <input
          id="instituicao"
          type="text"
          name="instituicao"
          className={inputClassName}
          value={formacaoState.instituicao}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="nomeCurso" className={labelClassName}>
          Nome do curso
        </label>
        <input
          id="nomeCurso"
          type="text"
          name="nomeCurso"
          className={inputClassName}
          value={formacaoState.nomeCurso}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="inicio" className={labelClassName}>
          Data de Início
        </label>
        <input
          id="inicio"
          type="date"
          name="inicio"
          className={inputClassName}
          value={formacaoState.inicio}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="termino" className={labelClassName}>
          Data de Conclusão
        </label>
        <input
          id="termino"
          type="date"
          name="termino"
          className={inputClassName}
          value={formacaoState.termino}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="descricao" className={labelClassName}>
          Descrição
        </label>
        <textarea
          id="descricao"
          type="date"
          name="descricao"
          className="col-lg-8 col-12 rounded"
          value={formacaoState.descricao}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          onClick={handleClick}
          className="btn btn-primary mt-3 mb-3 border-0"
          style={{ backgroundColor: "#4682B4" }}
        >
          Adicionar Formação
        </button>
      </div>

      {outletcontext.state[params.stateKey].map((element, index) => {
        return (
          <div key={index}>
            <div className="card mb-3" key={index}>
              <h5 className="card-header">{element.nomeCurso}</h5>
              <div className="card-body">
                <h5 className="card-title">
                  Instituição: {element.instituicao}
                </h5>
                <h6 className="card-title">De: {element.inicio}</h6>
                <h6 className="card-title">Até: {element.termino}</h6>
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
          </div>
        );
      })}
    </div>
  );
};

export default Formacao;
