import axios from "axios";
import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Detalhes from "../components/Detalhes";
import Endereco from "../components/Endereco";
import RegistroTabs from "../components/RegistroTabs";

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
        logradouro: "",
        bairro: "",
        numero: "",
        cep: "",
        complemento: "",
        localidade: "",
        uf: "",
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
    projetos: [
      {
        nome: "",
        url: "",
        github: "",
        descricao: "",
      },
    ],
    redeSocial: [
      {
        instagram: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        github: "",
      },
    ],
  });

  const [buscarCEP, setBuscarCEP] = useState("");

  function handleDetalhesChange(event) {
    const aux = { ...cv.detalhes, [event.target.name]: event.target.value };

    setCv({ ...cv, detalhes: aux });
  }

  function handleCEPChangeAPI(event) {
    setBuscarCEP(event.target.value);
  }

  function handleCEPChangeObj(event) {
    setCv((prevState) => {
      const newState = { ...prevState };
      prevState.detalhes.endereco[event.target.name] = event.target.value;

      return newState;
    });
  }

  function handleCEPClickAPI(event) {
    event.preventDefault();
    const url = `https://viacep.com.br/ws/${buscarCEP}/json/`;
    axios
      .get(url)
      .then((response) => {
        const { logradouro, bairro, numero, cep, complemento, localidade, uf } =
          response.data;
        const aux = {
          logradouro,
          bairro,
          numero,
          cep,
          complemento,
          localidade,
          uf,
        };
        setCv((prevState) => {
          const newState = { ...prevState };
          newState.detalhes.endereco = aux;
          return newState;
        });
      })
      .catch((err) => console.error(err));
  }
  console.log("tudo", cv);
  return (
    <div>
      <form>
        <Detalhes state={cv.detalhes} handleChange={handleDetalhesChange} />

        <div>
          <label htmlFor="CEP">CEP</label>
          <input
            id="CEP"
            type="text"
            name="CEP"
            value={buscarCEP}
            onChange={handleCEPChangeAPI}
          />
          <button onClick={(event) => handleCEPClickAPI(event)}>
            Buscar CEP
          </button>
        </div>

        <Endereco
          state={cv.detalhes.endereco}
          handleChange={handleCEPChangeObj}
        />

        <RegistroTabs />
        <Outlet context={{ state: cv, setState: setCv }} />
      </form>
    </div>
  );
};

export default CvAdicionar;
