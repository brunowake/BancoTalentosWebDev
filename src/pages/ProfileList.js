import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import axios from "axios";

function ProfileList() {
  const navigate = useNavigate();

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
  });

  useEffect(() => {
    axios
      .get({ data })
      .then((response) => {
        setState([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div>
        {state.map((currentProfile) => {
          const { id, detalhes } = currentProfile;
          return (
            <div
              className="card mb-3"
              style={{ maxWidth: "540px" }}
              key={id}
              onClick={() => navigate(`/cv/${id}`)}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="img-fluid rounded-start"
                    src={detalhes.imagem}
                    alt={detalhes.nome}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{detalhes.nome}</h5>
                    <p className="card-text">
                      {detalhes.cidade}, {detalhes.estado}
                    </p>
                    <p className="card-text">
                      <b>{detalhes.vaga}</b>
                    </p>
                    <p className="card-text">{detalhes.sobre}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileList;
