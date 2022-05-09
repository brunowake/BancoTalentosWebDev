import React, { useState, useId } from "react";
import { Link } from "react-router-dom";

const RegistroTabs = (props) => {
  const [active, setActive] = useState("");
  const opcoes = [
    {
      valor: "Experiência Profissional",
      endereco: "profissional/experienciaProfissional",
    },
    { valor: "Formação", endereco: "formacao/formacao" },
    { valor: "Competências", endereco: "competencias/competencias" },
    { valor: "Projetos", endereco: "projetos/projetos" },
  ];

  return (
    <ul className="nav nav-pills justify-content-center mb-3">
      {opcoes.map((element, index) => {
        return (
          <li className="nav-item" key={index}>
            <Link
              className={`nav-link `}
              style={{
                backgroundColor: active === element.valor ? "#4682B4" : "white",
                color: active === element.valor ? "white" : "#4682B4",
              }}
              aria-current="page"
              to={element.endereco}
              onClick={(event) => {
                setActive(element.valor);
              }}
            >
              {element.valor}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default RegistroTabs;
