import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function CvDetails() {
  const [state, setState] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/perfis/${id}`)
      .then((response) => {
        setState({ ...response.data });
      })
      .catch((err) => {
        console.error(err);
      });
    // async function fetchCV() {
    //   try {
    //     const response = await axios.get(`http://localhost:4000/perfis/${id}`);
    //     setState({ ...response.data });
    //     console.log(response.data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    // fetchCV();
  }, [id]);
  return (
    <div className="m-3">
      <section>
        <img
          className="rounded float-start"
          src={state.detalhes.imagem}
          alt={`${state.detalhes.nome}`}
        />
        <div>
          <h1>
            {state.detalhes.nome} {state.detalhes.sobrenome}
          </h1>
          <p>
            {state.detalhes.endereco.localidade}, {state.detalhes.endereco.uf}
          </p>
          <p>{state.detalhes.idade}</p>
          <p>{state.detalhes.email}</p>
          <h2>{state.detalhes.vaga}</h2>
        </div>
        <hr />
        <div>
          <h3>Sobre</h3>
          <p>{state.detalhes.sobre}</p>
        </div>
        <hr />
        <div>
          <h3>Experiências profissionais</h3>
          {state.experienciaProfissional.map((currentCVObj) => {
            const { nomeEmpresa, cargo, inicio, termino, descricao } =
              currentCVObj;
            return (
              <div>
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
          {state.formacao.map((currentCVObj) => {
            const { instituicao, nomeCurso, inicio, termino, descricao } =
              currentCVObj;
            return (
              <div>
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
          {state.projetos.map((currentCVObj) => {
            const { nome, url, github, descricao } = currentCVObj;
            return (
              <div>
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
            {state.competencias.map((currentCVObj) => (
              <li>
                {currentCVObj.nome} - {currentCVObj.descricao}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
          <h3>Redes Sociais</h3>
          {state.redeSocial.map((currentCVObj) => {
            const { instagram, facebook, twitter, github, linkedin } =
              currentCVObj;
            return (
              <div>
                <p>
                  <b>Instagram:</b> {instagram}
                </p>
                <p>
                  <b>Facebook:</b> {facebook}
                </p>
                <p>
                  <b>Twitter:</b> {twitter}
                </p>
                <p>
                  <b>LinkedIn:</b> {linkedin}
                </p>
                <p>
                  <b>github:</b> {github}
                </p>
              </div>
            );
          })}
        </div>
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
