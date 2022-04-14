import React from "react";
import ReactInputMask from "react-input-mask";

const Endereco = (props) => {
  const { state, handleChange } = props;
  const inputClassName = `col-lg-8 col-12 rounded-pill`;
  const labelClassName = `form-label  col-lg-4 col-12`;
  return (
    <div>
      {/* endereco */}
      <div>
        <label htmlFor="logradouro" className={labelClassName}>
          Rua
        </label>
        <input
          id="logradouro"
          type="text"
          name="logradouro"
          className={inputClassName}
          value={state.logradouro}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="complemento" className={labelClassName}>
          Número
        </label>
        <input
          id="complemento"
          type="text"
          name="complemento"
          className={inputClassName}
          value={state.numero}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="numero" className={labelClassName}>
          Complemento
        </label>
        <input
          id="numero"
          type="text"
          name="numero"
          className={inputClassName}
          value={state.complemento}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bairro" className={labelClassName}>
          Bairro
        </label>
        <input
          id="bairro"
          type="text"
          name="bairro"
          className={inputClassName}
          value={state.bairro}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="cep" className={labelClassName}>
          Cep
        </label>
        <ReactInputMask
          id="cep"
          type="text"
          name="cep"
          mask="99999-999"
          className={inputClassName}
          value={state.cep}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="localidade" className={labelClassName}>
          Cidade
        </label>
        <input
          id="localidade"
          type="text"
          name="localidade"
          className={inputClassName}
          value={state.localidade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="uf" className={labelClassName}>
          Estado
        </label>
        <input
          id="uf"
          type="text"
          name="uf"
          className={inputClassName}
          value={state.uf}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Endereco;
