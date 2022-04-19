import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import SideBar from "../components/SideBar";

function ProfileList() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);
  const [text, setText] = useState("");
  const [initialProfile, setInitialProfile] = useState([]);

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
        setInitialProfile([...response.data]);
        setProfile([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  let vagas = [
    // "Desenvolvedor Web - FullStack",
    // "Desenvolvedor Web - FrontEnd",
    // "Desenvolvedor Web - BackEnd",
    ...new Set(
      initialProfile.map((currentProfile) => {
        return currentProfile.detalhes.vaga;
      })
    ),
  ];

  const [checkVagas, setCheckVagas] = useState([
    // ...new Array(vagas.length).fill(false),
  ]);

  const [vagasSelecionadas, setVagasSelecionadas] = useState([]);

  useEffect(() => {
    setCheckVagas([...new Array(vagas.length).fill(false)]);
  }, [initialProfile]);

  console.log(checkVagas);

  function getUrlFind(arr) {
    let newUrl;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        newUrl = `?detalhes.vaga=${arr[i]}`;
      } else {
        newUrl += `&detalhes.vaga=${arr[i]}`;
      }
    }
    console.log(newUrl);
    return newUrl;
  }

  function handleCheckboxChange(i) {
    const updateCheckVagas = checkVagas.map((item, index) => {
      return index === i ? !item : item;
    });

    setCheckVagas(updateCheckVagas);

    // checkVagas[i] ? getCheckedProfiles(i): getProfiles();
    if (checkVagas[i] === false) {
      // getCheckedProfiles(i);
      let newVagasSelecionadas = [...vagasSelecionadas];
      newVagasSelecionadas.push(vagas[i]);
      setVagasSelecionadas(newVagasSelecionadas);
    }

    if (checkVagas[i] === true) {
      // getProfiles();
      setProfile(initialProfile);
    }
  }

  useEffect(() => {
    const resultadoUrl = getUrlFind(vagasSelecionadas);
    console.log(resultadoUrl);
    getCheckedProfiles(resultadoUrl);
  }, [vagasSelecionadas]);
  console.log(vagasSelecionadas);

  function getCheckedProfiles(resultadoUrl) {
    axios
      .get(`http://localhost:4000/perfis${resultadoUrl}`)
      .then((response) => {
        setProfile([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  let estado = [];

  profile.map((currentProfile) => {
    if (estado.indexOf(currentProfile.detalhes.endereco.uf) === -1) {
      estado.push(currentProfile.detalhes.endereco.uf);
    }
  });

  let estudo = [];

  profile.map((currentProfile) => {
    if (estudo.indexOf(currentProfile.formacao.instituicao) === -1) {
      estudo.push(currentProfile.formacao.instituicao);
    }
  });

  let competencias = [];

  profile.map((currentProfile) => {
    if (competencias.indexOf(currentProfile.competencias.nome) === -1) {
      competencias.push(currentProfile.competencias.nome);
    }
  });

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
            change={handleCheckboxChange}
            state={checkVagas}
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
