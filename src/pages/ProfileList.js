import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import SideBar from "../components/SideBar";

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

  // function handleCheckboxChange(event) {
  //   if (!check[event.target.value]) {
  //     setCheck({ ...check, [event.target.value]: true });
  //     const checkbox = profile.filter((currentProfile) => {
  //       return currentProfile[event.target.value];
  //     });
  //     setProfile(checkbox);
  //   }
  //   if (check[event.target.value]) {
  //     setCheck({ ...check, [event.target.value]: false });
  //   }
  // }

  //sendo data: detalhe.vaga, detalhe.endereco.uf, formacao.instituicao, competencias.nome
  let vagas = [
    ...new Set(profile.map((currentProfile) => currentProfile.detalhes.vaga)),
  ];

  // profile.map((currentProfile) => {
  //   if (vagas.indexOf(currentProfile.detalhes.vaga) === -1) {
  //     vagas.push(currentProfile.detalhes.vaga);
  //   }
  // });

  console.log(vagas);

  let estado = [];

  profile.map((currentProfile) => {
    if (estado.indexOf(currentProfile.detalhes.endereco.uf) === -1) {
      estado.push(currentProfile.detalhes.endereco.uf);
    }
  });

  console.log(estado);

  let estudo = [];

  profile.map((currentProfile) => {
    if (estudo.indexOf(currentProfile.formacao.instituicao) === -1) {
      estudo.push(currentProfile.formacao.instituicao);
    }
  });

  console.log(estudo);

  let competencias = [];

  profile.map((currentProfile) => {
    if (competencias.indexOf(currentProfile.competencias.nome) === -1) {
      competencias.push(currentProfile.competencias.nome);
    }
  });

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
    <div className="container ms-3 mt-5">
      <div className="row ">
        <div>
          <Search
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className="col-4">
          <SideBar
            vaga={vagas}
            estado={estado}
            competencias={competencias}
            // lista={handleCheckboxChange()}
          />
        </div>
        <div className="col-8">
          {profile.map((currentProfile) => {
            const { id, detalhes } = currentProfile;
            return (
              <div
                className="card mb-3 w-75"
                // style={{ maxWidth: "600px" }}
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
                      <span
                        className="card-text d-inline-block text-truncate"
                        style={{ maxWidth: "250px" }}
                      >
                        {detalhes.sobre}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfileList;
