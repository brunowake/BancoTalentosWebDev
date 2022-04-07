import React from "react";

const Detalhes = (props) => {
  const { state, handleChange } = props;
  const inputClassName = `col-lg-8 col-12 rounded-pill`;
  const labelClassName = `form-label  col-lg-4 col-12`;
  return (
    <div>
      {" "}
      <div className="input-group mb-2">
        <label htmlFor="nome" className={labelClassName}>
          Nome
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          className={inputClassName}
          value={state.nome}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="sobrenome" className={labelClassName}>
          Sobrenome
        </label>
        <input
          id="sobrenome"
          type="text"
          name="sobrenome"
          className={inputClassName}
          value={state.sobrenome}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="vaga" className={labelClassName}>
          Vaga
        </label>
        <input
          id="vaga"
          type="text"
          name="vaga"
          className={inputClassName}
          value={state.vaga}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="idade" className={labelClassName}>
          Idade
        </label>
        <input
          id="idade"
          type="text"
          name="idade"
          className={inputClassName}
          value={state.idade}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="dataNascimento" className={labelClassName}>
          Data de nascimento
        </label>
        <input
          id="dataNascimento"
          type="date"
          name="dataNascimento"
          className={inputClassName}
          value={state.dataNascimento}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="estadoCivil" className={labelClassName}>
          Estado civil
        </label>
        <input
          id="estadoCivil"
          type="text"
          name="estadoCivil"
          className={inputClassName}
          value={state.estadoCivil}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="celular" className={labelClassName}>
          Celular
        </label>
        <input
          id="celular"
          type="text"
          name="celular"
          className={inputClassName}
          value={state.celular}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className={labelClassName}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className={inputClassName}
          value={state.email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Detalhes;
