import React from "react";

const Detalhes = (props) => {
  const { state, handleChange } = props;
  return (
    <div>
      {" "}
      <div>
        <label htmlFor="nome">nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={state.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sobrenome">sobrenome</label>
        <input
          id="sobrenome"
          type="text"
          name="sobrenome"
          value={state.sobrenome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="vaga">Vaga</label>
        <input
          id="vaga"
          type="text"
          name="vaga"
          value={state.vaga}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="idade">idade</label>
        <input
          id="idade"
          type="text"
          name="idade"
          value={state.idade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dataNascimento">dataNascimento</label>
        <input
          id="dataNascimento"
          type="text"
          name="dataNascimento"
          value={state.dataNascimento}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="estadoCivil">estadoCivil</label>
        <input
          id="estadoCivil"
          type="text"
          name="estadoCivil"
          value={state.estadoCivil}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="celular">celular</label>
        <input
          id="celular"
          type="text"
          name="celular"
          value={state.celular}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Detalhes;
