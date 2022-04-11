import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";

function ProfileList() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getProfiles();
    console.log(profile);
  }, []);

  useEffect(() => {
    searchByVaga(text);
  }, [text]);

  function searchByVaga(text) {
    const clone = [...profile];
    const find = clone.filter((currentProfileObj) => {
      return currentProfileObj.detalhes.vaga
        .toLowerCase()
        .includes(text.toLowerCase());
    });

    setProfile(find);

    if (!text) {
      getProfiles();
    }
  }

  function getProfiles() {
    axios
      .get("http://localhost:4000/perfis")
      .then((response) => {
        setProfile([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="m-3">
      <div>
        <Search
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        {profile.map((currentProfile) => {
          const { id, detalhes } = currentProfile;
          return (
            <div
              className="card mb-3 w-75"
              style={{ maxWidth: "540px" }}
              key={id}
              onClick={() => navigate(`/cv/${id}`)}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    className="img-fluid rounded-start h-100 d-block"
                    src={detalhes.imagem}
                    alt={detalhes.nome}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {detalhes.nome} {detalhes.sobrenome}
                    </h5>
                    <h6 class="card-subtitle mb-2 fw-light text-muted fs-6">
                      {detalhes.endereco.localidade}, {detalhes.endereco.uf}
                    </h6>
                    <p className="card-text mt-2">
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
