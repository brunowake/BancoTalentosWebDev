import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import dataJSON from "../data.json";
import axios from "axios";

function CvDetails() {
  const [state, setState] = useState({
    id: "",
    detalhes: {
      nome: "",
      sobrenome: " ",
      idade: "",
      vaga: "",
      imagem: "",
      sobre: "",
      endereco: {
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
    competencias: [
      {
        nome: "",
        descricao: "",
      },
    ],
  });

  console.log(useParams());

  const { id } = useParams();

  useEffect(() => {
    async function fetchCV() {
      try {
        const response = await axios.get({ dataJSON });
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchCV();
  }, [id]);
  return (
    <div>
      <section>
        <img src={state.detalhes.imagem} alt={`${state.detalhes.nome}`} />
        <div>
          <h1>
            {state.detalhes.nome} {state.detalhes.sobrenome}
          </h1>
          <p>
            {state.detalhes.endereco.cidade}, {state.detalhes.endereco.estado}
          </p>
          <p>{state.detalhes.idade}</p>
          <p>{state.detalhes.email}</p>
          <h2>{state.detalhes.vaga}</h2>
        </div>
        <hr />
        <div>
          <h2>Sobre</h2>
          <p>{state.detalhes.descricao}</p>
        </div>
        <hr />
        <div>
          <h2>Experiências profissionais</h2>
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
          <h2>Formação</h2>
          {state.formacao.map((currentCVObj) => {
            const { instituicao, nomeCurso, inicio, termino, descricao } =
              currentCVObj;
            return (
              <div>
                <h3>{instituicao}</h3>
                <p>
                  <b>{nomeCurso}</b>
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
          <h2>Competências</h2>
          <ul>
            {state.competencias.map((currentCVObj) => (
              <li>
                {currentCVObj.nome} - {currentCVObj.descricao}
              </li>
            ))}
          </ul>
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
