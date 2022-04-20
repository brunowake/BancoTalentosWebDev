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
  const [checkVagas, setCheckVagas] = useState([]);
  const [checkSenior, setCheckSenior] = useState([]);

  const [checkUf, setCheckUf] = useState([]);
  // const [checkFilters, setCheckFilters] = useState({
  //   vagas: [],
  //   senioridade: [],
  //   estado: [],
  //   formacao: [],
  //   competencias: []
  // })
  const [vagasSelecionadas, setVagasSelecionadas] = useState([]);
  const [seniorSelecionados, setSeniorSelecionados] = useState([]);

  const [ufSelecionados, setUfSelecionados] = useState([]);
  // const [selected, setSelected] = useState({
  //   vagas: [],
  //   senioridade: [],
  //   estado: [],
  //   formacao: [],
  //   competencias: []
  // })

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
    ...new Set(
      initialProfile.map((currentProfile) => {
        return currentProfile.detalhes.vaga;
      })
    ),
  ].filter(Boolean);

  let senioridade = [
    ...new Set(
      initialProfile.map((currentProfile) => {
        return currentProfile.detalhes.senioridade;
      })
    ),
  ].filter(Boolean);

  let estado = [
    ...new Set(
      initialProfile.map((currentProfile) => {
        return currentProfile.detalhes.endereco.uf;
      })
    ),
  ].filter(Boolean);

  useEffect(() => {
    setCheckVagas([...new Array(vagas.length).fill(false)]);
    setCheckSenior([...new Array(senioridade.length).fill(false)]);
    setCheckUf([...new Array(estado.length).fill(false)]);
  }, [initialProfile]);

  let newUrl = false;
  function getUrlVaga(arr) {
    let site = "";
    if (!arr.length) {
      return site;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!newUrl) {
        site = `?detalhes.vaga=${arr[i]}`;
        newUrl = true;
      } else {
        site += `&detalhes.vaga=${arr[i]}`;
      }
    }
    console.log(site);
    // newUrl = true;
    return site;
  }

  function getUrlSenior(arr) {
    let site = "";

    if (!arr.length) {
      return site;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!newUrl) {
        site = `?detalhes.senioridade=${arr[i]}`;
        newUrl = true;
      } else {
        site += `&detalhes.senioridade=${arr[i]}`;
      }
    }
    console.log(site);
    // newUrl = true;

    return site;
  }

  function getUrlUf(arr) {
    let site = "";

    if (!arr.length) {
      return site;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!newUrl) {
        site = `?detalhes.endereco.uf=${arr[i]}`;
        newUrl = true;
      } else {
        site += `&detalhes.endereco.uf=${arr[i]}`;
      }
    }
    console.log(site);
    // newUrl = true;

    return site;
  }

  function handleCheckboxVagasChange(i) {
    const updateCheckVagas = checkVagas.map((item, index) => {
      return index === i ? !item : item;
    });

    setCheckVagas(updateCheckVagas);
    let newVagasSelecionadas = [...vagasSelecionadas];

    // checkVagas[i] ? getCheckedProfiles(i): getProfiles();
    if (checkVagas[i] === false) {
      // getCheckedProfiles(i);
      console.log(vagas[i]);
      if (newVagasSelecionadas.indexOf(vagas[i]) === -1) {
        newVagasSelecionadas.push(vagas[i]);
        setVagasSelecionadas(newVagasSelecionadas);
      }
    }

    if (checkVagas[i] === true) {
      console.log(vagas[i]);
      let index = newVagasSelecionadas.indexOf(vagas[i]);
      newVagasSelecionadas.splice(index, 1);
      setVagasSelecionadas(newVagasSelecionadas);
    }
  }

  function handleCheckboxSeniorChange(i) {
    const updateCheckSenior = checkSenior.map((item, index) => {
      return index === i ? !item : item;
    });

    setCheckSenior(updateCheckSenior);
    let newSeniorSelecionados = [...seniorSelecionados];

    if (checkSenior[i] === false) {
      console.log(senioridade[i]);
      if (newSeniorSelecionados.indexOf(senioridade[i]) === -1) {
        newSeniorSelecionados.push(senioridade[i]);
        setSeniorSelecionados(newSeniorSelecionados);
      }
    }

    if (checkSenior[i] === true) {
      console.log(senioridade[i]);
      let index = newSeniorSelecionados.indexOf(senioridade[i]);
      newSeniorSelecionados.splice(index, 1);
      setSeniorSelecionados(newSeniorSelecionados);
    }
  }

  function handleCheckboxUfChange(i) {
    const updateCheckUf = checkUf.map((item, index) => {
      return index === i ? !item : item;
    });

    setCheckUf(updateCheckUf);
    let newUfSelecionados = [...ufSelecionados];

    if (checkUf[i] === false) {
      newUfSelecionados.push(estado[i]);
      setUfSelecionados(newUfSelecionados);
    }

    if (checkUf[i] === true) {
      newUfSelecionados.splice(estado[i], 1);
      setUfSelecionados(newUfSelecionados);
    }
  }

  useEffect(() => {
    let resultadoVagaUrl = getUrlVaga(vagasSelecionadas);
    console.log(resultadoVagaUrl);

    let resultadoSeniorUrl = getUrlSenior(seniorSelecionados);
    console.log(resultadoSeniorUrl);

    let resultadoUfUrl = getUrlUf(ufSelecionados);
    console.log(resultadoUfUrl);

    let resultadoUrl = resultadoVagaUrl + resultadoSeniorUrl + resultadoUfUrl;
    console.log(resultadoUrl);
    resultadoUrl
      ? getCheckedProfiles(resultadoUrl)
      : setProfile(initialProfile);
  }, [vagasSelecionadas, seniorSelecionados, ufSelecionados]);

  // console.log(vagasSelecionadas);
  // console.log(checkVagas);

  // console.log(seniorSelecionados);
  // console.log(checkSenior);

  // console.log(ufSelecionados);
  // console.log(checkUf);

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

  let estudo = [
    ...new Set(
      initialProfile.map((currentProfile) =>
        currentProfile.formacao.map(
          (currentFormacao) => currentFormacao.instituicao
        )
      )
    ),
  ];

  // console.log(estudo);

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
            senioridade={senioridade}
            estado={estado}
            estudo={estudo}
            competencias={competencias}
            changeVagas={handleCheckboxVagasChange}
            changeUf={handleCheckboxUfChange}
            changeSenior={handleCheckboxSeniorChange}
            stateVagas={checkVagas}
            stateUf={checkUf}
            stateSenior={checkSenior}
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
                      <h6 className="card-subtitle mb-2 fw-light text-muted fs-6">
                        {detalhes.endereco.localidade}, {detalhes.endereco.uf}
                      </h6>
                      <p className="card-text mt-2">
                        <b>
                          {detalhes.vaga} - {detalhes.senioridade}
                        </b>
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
