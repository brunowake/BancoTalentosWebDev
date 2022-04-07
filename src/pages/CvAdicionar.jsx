import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Detalhes from "../components/Detalhes";
import Endereco from "../components/Endereco";
import RedeSocial from "../components/RedeSocial";
import RegistroTabs from "../components/RegistroTabs";

const CvAdicionar = () => {
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
      email: "",
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
    redeSocial: {
      instagram: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      github: "",
    },
  });

  const [buscarCEP, setBuscarCEP] = useState("");

  function createCodigoResgistro() {
    return `${cv.detalhes.nome}${cv.detalhes.sobrenome}${cv.detalhes.idade}`;
  }

  function handleFinalizarClick(event) {
    setCv({ ...cv, codigoRegistro: createCodigoResgistro() });
  }

  function handleDetalhesChange(event) {
    const aux = { ...cv.detalhes, [event.target.name]: event.target.value };

    setCv({ ...cv, detalhes: aux });
  }
  function handleRedeSocialChange(event) {
    const aux = { ...cv.redeSocial, [event.target.name]: event.target.value };

    setCv({ ...cv, redeSocial: aux });
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
    if (cv.codigoRegistro) {
      alert(cv.codigoRegistro);
    }
  }, [cv.codigoRegistro]);

  console.log(cv.redeSocial);
  return (
    <div className="container ">
      <form className="d-flex justify-content-center flex-column">
        <p className="h1 text-center mb-3">Detalhes</p>
        <Detalhes state={cv.detalhes} handleChange={handleDetalhesChange} />
        <hr />

        <p className="h1 text-center mb-3">Rede Social</p>
        <RedeSocial
          state={cv.redeSocial}
          handleChange={handleRedeSocialChange}
        />
        <hr />

        <p className="h1 text-center mb-3">Endereço</p>
        <div className="input-group mb-3 mt-3">
          <input
            id="CEP"
            type="text"
            name="CEP"
            className="form-control rounded-pill"
            value={buscarCEP}
            placeholder="Insira o seu CEP"
            onChange={handleCEPChangeAPI}
          />
          <button
            className="btn btn-outline-primary ms-2 rounded-pill"
            onClick={(event) => handleCEPClickAPI(event)}
          >
            Buscar CEP
          </button>
        </div>

        <Endereco
          state={cv.detalhes.endereco}
          handleChange={handleCEPChangeObj}
        />
        <hr />
        <RegistroTabs />

        <Outlet context={{ state: cv, setState: setCv }} />
        <hr />

        <button
          className="btn btn-primary align-text-center "
          onClick={(event) => {
            event.preventDefault();
            handleFinalizarClick();
          }}
        >
          Finalizar Cadastro
        </button>
      </form>
    </div>
  );
};

export default CvAdicionar;
