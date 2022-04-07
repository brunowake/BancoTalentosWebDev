import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import dataJSON from "../data.json";
import axios from "axios";

function ProfileList() {
  const navigate = useNavigate();

  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/perfis")
      .then((response) => {
        setState([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(state);
  }, []);

  return (
    <div className="m-3">
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
                    <h5 className="card-title">
                      {detalhes.nome} {detalhes.sobrenome}
                    </h5>
                    <p className="card-text">
                      {detalhes.endereco.localidade}, {detalhes.endereco.uf}
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
