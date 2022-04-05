import axios from "axios";
import React, { useState } from "react";

const CvAdicionar = () => {
  const [cv, setCv] = useState({
    id: "",
    detalhes: {
      nome: "",
      sobrenome: "",
      idade: "",
      dataNascimento: "",
      estadoCivil: "",
      celular: "",
      vaga: "",
      endereco: {
        rua: "",
        bairro: "",
        numero: "",
        cep: "",
        complemento: "",
        cidade: "",
        estado: "",
      },
    },
    experienciaProfissional: [
      {
        nomeEmpresa: "",
        cargo: "",
        inicio: "",
        termino: "",
        descricao: "",
      },
    ],
    formacao: [
      {
        instituicao: "",
        nomeCurso: "",
        inicio: "",
        termino: "",
        descricao: "",
      },
    ],
    observacao: [
      {
        nome: "",
        descricao: "",
      },
    ],
  });

  const [buscarCEP, setBuscarCEP] = useState("");

  function handleDetalhesChange(event) {
    const aux = { ...cv.detalhes, [event.target.name]: event.target.value };

    setCv({ ...cv, detalhes: aux });
  }

  function handleCEPChange(event) {
    setBuscarCEP(event.target.value);
  }
  function handleCEPClick(event) {
    event.preventDefault();
    const url = `https://viacep.com.br/ws/${buscarCEP}/json/`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }
  console.log(cv.detalhes, buscarCEP);
  return (
    <div>
      <form>
        <div>
          <label htmlFor="nome">nome</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={cv.detalhes.nome}
            onChange={handleDetalhesChange}
          />
        </div>
        <div>
          <label htmlFor="sobrenome">sobrenome</label>
          <input
            id="sobrenome"
            type="text"
            name="sobrenome"
            value={cv.detalhes.sobrenome}
            onChange={handleDetalhesChange}
          />
        </div>
        <div>
          <label htmlFor="idade">idade</label>
          <input
            id="idade"
            type="text"
            name="idade"
            value={cv.detalhes.idade}
            onChange={handleDetalhesChange}
          />
        </div>
        <div>
          <label htmlFor="dataNascimento">dataNascimento</label>
          <input
            id="dataNascimento"
            type="text"
            name="dataNascimento"
            value={cv.detalhes.dataNascimento}
            onChange={handleDetalhesChange}
          />
        </div>
        <div>
          <label htmlFor="estadoCivil">estadoCivil</label>
          <input
            id="estadoCivil"
            type="text"
            name="estadoCivil"
            value={cv.detalhes.estadoCivil}
            onChange={handleDetalhesChange}
          />
        </div>
        <div>
          <label htmlFor="celular">celular</label>
          <input
            id="celular"
            type="text"
            name="celular"
            value={cv.detalhes.celular}
            onChange={handleDetalhesChange}
          />
        </div>
        <div>
          <label htmlFor="CEP">CEP</label>
          <input
            id="CEP"
            type="text"
            name="CEP"
            value={buscarCEP}
            onChange={handleCEPChange}
          />
          <button onClick={(event) => handleCEPClick(event)}>Buscar CEP</button>
        </div>
      </form>
    </div>
  );
};

export default CvAdicionar;
