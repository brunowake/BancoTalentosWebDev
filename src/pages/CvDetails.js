import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  // useEffect(() => {
  //   async function fetchCV() {
  //     console.log("oi");
  //     try {
  //       const response = await axios.get(`http://localhost:4000/perfis/${id}`);
  //       console.log(response);
  //       setState({ ...response.data });
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   fetchCV();
  // }, [id]);

  console.log(state);

  const {
    detalhes,
    experienciaProfissional,
    formacao,
    projetos,
    competencias,
    redeSocial,
  } = state;

  return (
    <div className="m-3">
      <section>
        <img
          className="rounded float-start"
          src={detalhes.imagem}
          alt={`${detalhes.nome}`}
        />
        <div>
          <h1>
            {detalhes.nome} {detalhes.sobrenome}
          </h1>
          <p>
            {detalhes.endereco.localidade}, {detalhes.endereco.uf}
          </p>
          <p>{detalhes.idade}</p>
          <p>{detalhes.email}</p>
          <h2>{detalhes.vaga}</h2>
        </div>
        <hr />
        <div>
          <h3>Sobre</h3>
          <p>{detalhes.sobre}</p>
        </div>
        <hr />
        <div>
          <h3>Redes Sociais</h3>

          <div>
            <p>
              <b>Instagram:</b> {redeSocial.instagram}
            </p>
            <p>
              <b>Facebook:</b> {redeSocial.facebook}
            </p>
            <p>
              <b>Twitter:</b> {redeSocial.twitter}
            </p>
            <p>
              <b>LinkedIn:</b> {redeSocial.linkedin}
            </p>
            <p>
              <b>github:</b> {redeSocial.github}
            </p>
          </div>
        </div>
        <hr />
        <div>
          <h3>Experiências profissionais</h3>
          {experienciaProfissional.map((currentCVObj, index) => {
            const { nomeEmpresa, cargo, inicio, termino, descricao } =
              currentCVObj;
            return (
              <div key={index}>
                <p>
                  <b>{nomeEmpresa}</b>
                </p>
                <p>
                  <b>Cargo:</b>
                  {cargo}
                </p>
                <p>
                  {inicio}-{termino}
                </p>
                <p>{descricao}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          <h3>Formação</h3>
          {formacao.map((currentCVObj, index) => {
            const { instituicao, nomeCurso, inicio, termino, descricao } =
              currentCVObj;
            return (
              <div key={index}>
                <p>
                  <b>{instituicao}</b>
                </p>
                <p>
                  <b>Curso:</b>
                  {nomeCurso}
                </p>
                <p>
                  {inicio}-{termino}
                </p>
                <p>{descricao}</p>
              </div>
            );
          })}
        </div>

        <hr />
        <div>
          <h3>Projetos</h3>
          {projetos.map((currentCVObj, index) => {
            const { nome, url, github, descricao } = currentCVObj;
            return (
              <div key={index}>
                <p>
                  <b>{nome}</b>
                </p>
                <p>{url}</p>
                <p>{github}</p>
                <p>{descricao}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          <h3>Competências</h3>
          <ul>
            {competencias.map((currentCVObj, index) => (
              <li key={index}>
                {currentCVObj.nome} - {currentCVObj.descricao}
              </li>
            ))}
          </ul>
        </div>
        <hr />
      </section>
      {/* <div>
        <Link className="fa-solid fa-trash-can" to={"cv delete"}></Link>
      </div>
      <div>
        <Link className="btn btn-warning" to={"cv edit"}>
          edit
        </Link>
      </div> */}
    </div>
  );
}

export default CvDetails;
