import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import "./CvDetails.css";

import api from "../api/api";

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
      senioridade: "",
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
  const pdf = useRef();

  function dateFormat(date) {
    const newDate = date.split("-");
    const newFormat = `${newDate[1]}/${newDate[0]}`;
    return newFormat;
  }

  useEffect(() => {
    api
      .get(`/perfis/${id}`)
      .then((response) => {
        setState({ ...response.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const {
    detalhes,
    experienciaProfissional,
    formacao,
    projetos,
    competencias,
    redeSocial,
  } = state;

  let showSectionProfissional =
    experienciaProfissional.length === 0 ? (
      ""
    ) : (
      <div className="ms-3">
        <hr />
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
    );

  let showSectionFormacao =
    formacao.length === 0 ? (
      ""
    ) : (
      <div className="ms-3">
        <hr />
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
    );

  let showSectionProjetos =
    projetos.length === 0 ? (
      ""
    ) : (
      <div className="ms-3">
        <hr />
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
    );

  let showSectionCompetencias =
    competencias.length === 0 ? (
      ""
    ) : (
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
    );

  function showSectionRedesSociais() {
    const { instagram, facebook, twitter, linkedin, github } = redeSocial;
    if (!instagram || !facebook || !twitter || !linkedin || !github) {
      return "";
    } else {
      return (
        <div className="ms-3 col">
          <h3 className="fs-5 mb-3">Redes Sociais</h3>

          <div>
            {!instagram ? (
              ""
            ) : (
              <p className="m-0">
                <b>Instagram:</b> {instagram}
              </p>
            )}
            {!facebook ? (
              ""
            ) : (
              <p className="m-0">
                <b>Facebook:</b> {facebook}
              </p>
            )}
            {!twitter ? (
              ""
            ) : (
              <p className="m-0">
                <b>Twitter:</b> {twitter}
              </p>
            )}
            {!linkedin ? (
              ""
            ) : (
              <p className="m-0">
                <b>LinkedIn:</b> {linkedin}
              </p>
            )}
            {!github ? (
              ""
            ) : (
              <p className="m-0">
                <b>github:</b> {github}
              </p>
            )}
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button
            className="btn btn-primary mt-4 me-4 float-end border-0"
            style={{ backgroundColor: "#4682B4" }}
          >
            {" "}
            PDF
          </button>
        )}
        content={() => pdf.current}
      />
      <div ref={pdf}>
        <div className="m-5 mt-5 p-3">
          <div className="d-flex mt-5">
            <img
              className="img-fluid rounded col"
              style={{ height: "200px", width: "auto" }}
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
              <p className="m-0">{detalhes.idade} anos</p>
              <p className="m-0">{detalhes.email}</p>
              <h2 className=" mt-2 fs-5">
                {detalhes.vaga} - {detalhes.senioridade}
              </h2>
            </div>
          </div>
        </div>
        {detalhes.sobre.length === 0 ? (
          ""
        ) : (
          <div className="mt-4 ms-3">
            <h3 className="fs-5 mb-3">Sobre</h3>
            <p>{detalhes.sobre}</p>
          </div>
        )}

        {showSectionProfissional}
        {showSectionFormacao}
        {showSectionProjetos}
        <hr />

        <div className="container ms-0 me-0">
          <div className="row">
            {showSectionCompetencias}
            <div className="vr p-0"></div>

            {showSectionRedesSociais}
            <div className="mt-4 ms-3">
              <h3 className="fs-5 mb-3">Sobre</h3>
              <p>{detalhes.sobre}</p>
            </div>

            {showSectionProfissional}
            {showSectionFormacao}
            {showSectionProjetos}
            <hr />

            <div className="container ms-0 me-0">
              <div className="row">
                {showSectionCompetencias}
                <div className="vr p-0"></div>

                {showSectionRedesSociais}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvDetails;
