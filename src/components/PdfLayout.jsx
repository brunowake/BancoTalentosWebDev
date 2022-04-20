import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import "../pages/CvDetails.css";

import axios from "axios";

function Pdflayout(props) {
  const { state } = props.state;

  const pdfDiv = useRef();

  function dateFormat(date) {
    const newDate = date.split("-");
    const newFormat = `${newDate[1]}/${newDate[0]}`;
    return newFormat;
  }

  const {
    detalhes,
    experienciaProfissional,
    formacao,
    projetos,
    competencias,
    redeSocial,
  } = props.state;

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

  let showSectionRedesSociais =
    redeSocial.length === 0 ? (
      ""
    ) : (
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
    );

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button
            className="btn btn-primary"
            style={{ position: "absolute", top: "66px", right: "20px" }}
          >
            Gerar Pdf
          </button>
        )}
        content={() => pdfDiv.current}
      />

      <div className="m-5 mt-5 p-3" ref={pdfDiv}>
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
  );
}

export default Pdflayout;
