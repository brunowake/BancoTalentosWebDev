import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Detalhes from "../components/Detalhes";
import Endereco from "../components/Endereco";
import RegistroTabs from "../components/RegistroTabs";
import data from "../data.json";

const CvEditar = () => {
  const [cv, setCv] = useState({
    id: "",
    codigoRegistro: "",
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
  const { codigoRegistro } = useParams();

  const [buscarCEP, setBuscarCEP] = useState("");

  function createCodigoResgistro() {
    return `${cv.detalhes.nome}${cv.detalhes.sobrenome}${cv.detalhes.idade}`;
  }

  function handleFinalizarClick(event) {
    alert("axios aqui");
  }

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

  useEffect(() => {
    const editarCv = data.filter((element) => {
      return element.codigoRegistro === codigoRegistro;
    });

    setCv(editarCv[0]);
  }, []);

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

        <button
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            handleFinalizarClick();
          }}
        >
          Atualizar Cadastro
        </button>
      </form>
    </div>
  );
};

export default CvEditar;
