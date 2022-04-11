import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CvDetails.css";

import axios from "axios";

function CvDetails() {
  const [state, setState] = useState({
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
      sobre: "",
      imagem: "",
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
        inicio: "1",
        termino: "",
        descricao: "",
      },
    ],
    competencias: [
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

  const { id } = useParams();

  function dateFormat(date) {
    const newDate = date.split("-");
    const newFormat = `${newDate[1]}/${newDate[0]}`;
    return newFormat;
  }

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:4000/perfis/${id}`)
      .then((response) => {
        console.log(response.data);
        console.log(id);
        setState({ ...response.data });
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(state);
  }, []);

  const {
    detalhes,
    experienciaProfissional,
    formacao,
    projetos,
    competencias,
    redeSocial,
  } = state;

  return (
    <div className="m-5 ">
      <div className="d-flex">
        <img
          className="img-fluid rounded col"
          style={{ height: "195px" }}
          src={detalhes.imagem}
          alt={`${detalhes.nome}`}
        />
        <div className="ms-5 col-10">
          <h1>
            {detalhes.nome} {detalhes.sobrenome}
          </h1>
          <p className="m-0">
            {detalhes.endereco.localidade}, {detalhes.endereco.uf}
          </p>
          <p className="m-0">{detalhes.idade}</p>
          <p className="m-0">{detalhes.email}</p>
          <h2 className=" mt-2 fs-5">{detalhes.vaga}</h2>
        </div>
      </div>
      <div className="mt-4 ms-3">
        <h3 className="fs-5 mb-3">Sobre</h3>
        <p>{detalhes.sobre}</p>
      </div>

      <hr />
      <div className="ms-3">
        <h3 className="fs-5 mb-3">Experiências profissionais</h3>
        {experienciaProfissional.map((currentCVObj, index) => {
          const { nomeEmpresa, cargo, inicio, termino, descricao } =
            currentCVObj;
          return (
            <div key={index}>
              <h5 className="m-0">
                <b>{nomeEmpresa}</b>
              </h5>
              <h6 className="m-0">{cargo}</h6>
              <p className="fs-6 fw-light">
                {dateFormat(inicio)} - {dateFormat(termino)}
              </p>
              <p>{descricao}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="ms-3">
        <h3 className="fs-5 mb-3">Formação</h3>
        {formacao.map((currentCVObj, index) => {
          const { instituicao, nomeCurso, inicio, termino, descricao } =
            currentCVObj;
          return (
            <div key={index}>
              <h5 className="m-0">
                <b>{instituicao}</b>
              </h5>
              <h6 className="m-0">{nomeCurso}</h6>
              <p className="fs-6 fw-light">
                {dateFormat(inicio)} - {dateFormat(termino)}
              </p>
              <p>{descricao}</p>
            </div>
          );
        })}
      </div>

      <hr />
      <div className="ms-3">
        <h3 className="fs-5 mb-3">Projetos</h3>
        {projetos.map((currentCVObj, index) => {
          const { nome, url, github, descricao } = currentCVObj;
          return (
            <div key={index}>
              <h5 className="m-0">{nome}</h5>
              <p className="m-0">
                <b>Site:</b> {url}
              </p>
              <p className="m-0">
                <b>Github:</b> {github}
              </p>
              <p>{descricao}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="container ms-0 me-0">
        <div className="row">
          <div className="ms-3 col">
            <h3 className="fs-5 mb-3">Competências</h3>
            <ul>
              {competencias.map((currentCVObj, index) => (
                <li className="m-0" key={index}>
                  {currentCVObj.nome} - {currentCVObj.descricao}
                </li>
              ))}
            </ul>
          </div>

          <div className="ms-3 col">
            <h3 className="fs-5 mb-3">Redes Sociais</h3>

            <div>
              <p className="m-0">
                <b>Instagram:</b> {redeSocial.instagram}
              </p>
              <p className="m-0">
                <b>Facebook:</b> {redeSocial.facebook}
              </p>
              <p className="m-0">
                <b>Twitter:</b> {redeSocial.twitter}
              </p>
              <p className="m-0">
                <b>LinkedIn:</b> {redeSocial.linkedin}
              </p>
              <p className="m-0">
                <b>github:</b> {redeSocial.github}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CvDetails;
