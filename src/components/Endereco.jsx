import React from "react";

const Endereco = (props) => {
  const { state, handleChange } = props;
  return (
    <div>
      {/* endereco */}
      <div>
        <label htmlFor="logradouro">Rua</label>
        <input
          id="logradouro"
          type="text"
          name="logradouro"
          value={state.logradouro}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="uf">Estado</label>
        <input
          id="uf"
          type="text"
          name="uf"
          value={state.uf}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="localidade">Cidade</label>
        <input
          id="localidade"
          type="text"
          name="localidade"
          value={state.localidade}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="complemento">Complemento</label>
        <input
          id="complemento"
          type="text"
          name="complemento"
          value={state.complemento}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cep">Cep</label>
        <input
          id="cep"
          type="text"
          name="cep"
          value={state.cep}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="numero">Numero</label>
        <input
          id="numero"
          type="text"
          name="numero"
          value={state.numero}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bairro">Bairro</label>
        <input
          id="bairro"
          type="text"
          name="bairro"
          value={state.bairro}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Endereco;
