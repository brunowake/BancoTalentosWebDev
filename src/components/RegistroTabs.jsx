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
    { valor: "Observação", endereco: "observacao/observacao" },
    { valor: "Projetos", endereco: "projetos/projetos" },
    { valor: "Rede Social", endereco: "redesocial/redeSocial" },
  ];

  return (
    <ul className="nav nav-pills justify-content-center">
      {opcoes.map((element, index) => {
        return (
          <li className="nav-item" key={index}>
            <Link
              className={`nav-link ${active === element.valor ? "active" : ""}`}
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
