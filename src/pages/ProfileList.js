import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
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
  const [checkFormacao, setCheckFormacao] = useState([]);
  const [checkCompetencias, setCheckCompetencias] = useState([]);

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
  const [formacaoSelecionadas, setFormacaoSelecionadas] = useState([]);
  const [competenciasSelecionadas, setCompetenciasSelecionadas] = useState([]);

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

  // barra de pesquisa
  useEffect(() => {
    searchByVaga(text);
  }, [text]);

  function searchByVaga(text) {
    const clone = [...profile];
    const find = clone.filter((currentProfileObj) => {
      let nome = currentProfileObj.detalhes.nome
        .toLowerCase()
        .includes(text.toLowerCase());
      let sobrenome = currentProfileObj.detalhes.sobrenome
        .toLowerCase()
        .includes(text.toLowerCase());
      return nome + sobrenome;
    });

    setProfile(find);

    if (!text) {
      getProfiles();
    }
  }

  function getProfiles() {
    api
      .get("/perfis")
      .then((response) => {
        setInitialProfile([...response.data]);
        setProfile([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // FUNÇÕES PARA O SIDEBAR

  // captura dos nomes dos "temas" para os campos do Sidebar
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

  let estudoArr = [
    ...new Set(
      initialProfile.map((currentProfile) => {
        return currentProfile.formacao.map((currentFormacao) =>
          currentFormacao.instituicao.toUpperCase()
        );
      })
    ),
  ];

  let estudo = [...new Set(estudoArr.flat())].filter(Boolean);

  let competenciasArr = [
    ...new Set(
      initialProfile.map((currentProfile) => {
        return currentProfile.competencias.map((currentCompetencia) =>
          currentCompetencia.nome
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        );
      })
    ),
  ];

  let competenciasPadrao = [...new Set(competenciasArr.flat())].filter(Boolean);

  let competencias = competenciasPadrao.map((elemento) => {
    return (
      elemento.charAt(0).toUpperCase() + elemento.substring(1).toLowerCase()
    );
  });

  console.log(estudo);
  console.log(competencias);

  useEffect(() => {
    setCheckVagas([...new Array(vagas.length).fill(false)]);
    setCheckSenior([...new Array(senioridade.length).fill(false)]);
    setCheckUf([...new Array(estado.length).fill(false)]);
    setCheckFormacao([...new Array(estudo.length).fill(false)]);
    setCheckCompetencias([...new Array(competencias.length).fill(false)]);
  }, [initialProfile]);

  // Cada "tema" tem uma handleChange para funcionar as checkbox

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
      let index = newUfSelecionados.indexOf(estado[i]);
      newUfSelecionados.splice(index, 1);
      setUfSelecionados(newUfSelecionados);
    }
  }

  function handleCheckboxFormacaoChange(i) {
    const updateCheckFormacao = checkFormacao.map((item, index) => {
      return index === i ? !item : item;
    });

    setCheckFormacao(updateCheckFormacao);
    let newFormacaoSelecionadas = [...formacaoSelecionadas];

    if (checkFormacao[i] === false) {
      newFormacaoSelecionadas.push(estudo[i]);
      setFormacaoSelecionadas(newFormacaoSelecionadas);
    }

    if (checkFormacao[i] === true) {
      let index = newFormacaoSelecionadas.indexOf(estudo[i]);
      newFormacaoSelecionadas.splice(index, 1);
      setFormacaoSelecionadas(newFormacaoSelecionadas);
    }
  }

  function handleCheckboxCompetenciasChange(i) {
    const updateCheckCompetencias = checkCompetencias.map((item, index) => {
      return index === i ? !item : item;
    });

    setCheckCompetencias(updateCheckCompetencias);
    let newCompetenciasSelecionadas = [...competenciasSelecionadas];

    if (checkCompetencias[i] === false) {
      console.log(competencias[i]);
      if (newCompetenciasSelecionadas.indexOf(competencias[i]) === -1) {
        newCompetenciasSelecionadas.push(competencias[i]);
        setCompetenciasSelecionadas(newCompetenciasSelecionadas);
      }
    }

    if (checkCompetencias[i] === true) {
      console.log(competencias[i]);
      let index = newCompetenciasSelecionadas.indexOf(competencias[i]);
      newCompetenciasSelecionadas.splice(index, 1);
      setCompetenciasSelecionadas(newCompetenciasSelecionadas);
    }
  }

  // cada tema gera um complemento para ser atribuido a url do servidor
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

    return site;
  }

  function getUrlFormacao(arr) {
    let site = "";

    if (!arr.length) {
      return site;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!newUrl) {
        site = `?formacao.1.instituicao=${arr[i]}`;
        newUrl = true;
      } else {
        site += `&formacao.1.instituicao=${arr[i]}`;
      }
    }
    console.log(site);

    return site;
  }

  function getUrlCompetencias(arr) {
    let site = "";

    if (!arr.length) {
      return site;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!newUrl) {
        site = `?competencias.1.nome=${arr[i]}`;
        newUrl = true;
      } else {
        site += `&competencias.1.nome=${arr[i]}`;
      }
    }
    console.log(site);

    return site;
  }

  // no useEffect os resultados acima são concatenados para os filtros funcionarem concomitantemente
  useEffect(() => {
    let resultadoVagaUrl = getUrlVaga(vagasSelecionadas);
    console.log(resultadoVagaUrl);

    let resultadoSeniorUrl = getUrlSenior(seniorSelecionados);
    console.log(resultadoSeniorUrl);

    let resultadoUfUrl = getUrlUf(ufSelecionados);
    console.log(resultadoUfUrl);

    let resultadoFormacaoUrl = getUrlFormacao(formacaoSelecionadas);
    console.log(resultadoFormacaoUrl);

    let resultadoCompetenciasUrl = getUrlCompetencias(competenciasSelecionadas);

    let resultadoUrl =
      resultadoVagaUrl +
      resultadoSeniorUrl +
      resultadoUfUrl +
      resultadoFormacaoUrl +
      resultadoCompetenciasUrl;

    console.log(resultadoUrl);
    resultadoUrl
      ? getCheckedProfiles(resultadoUrl)
      : setProfile(initialProfile);
  }, [
    vagasSelecionadas,
    seniorSelecionados,
    ufSelecionados,
    formacaoSelecionadas,
    competenciasSelecionadas,
  ]);

  // console.log(vagasSelecionadas);
  // console.log(checkVagas);

  // console.log(seniorSelecionados);
  // console.log(checkSenior);

  // console.log(ufSelecionados);
  // console.log(checkUf);

  console.log(formacaoSelecionadas);
  console.log(checkFormacao);

  function getCheckedProfiles(resultadoUrl) {
    api
      .get(`/perfis${resultadoUrl}`)
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
            senioridade={senioridade}
            estado={estado}
            estudo={estudo}
            competencias={competencias}
            changeVagas={handleCheckboxVagasChange}
            changeUf={handleCheckboxUfChange}
            changeSenior={handleCheckboxSeniorChange}
            changeFormacao={handleCheckboxFormacaoChange}
            changeCompetencias={handleCheckboxCompetenciasChange}
            stateVagas={checkVagas}
            stateUf={checkUf}
            stateSenior={checkSenior}
            stateFormacao={checkFormacao}
            stateCompetencias={checkCompetencias}
          />
        </div>
        <div className="col-8">
          {profile.length === 0 ? (
            <h2 className="text-center fw-bold">
              Nenhum resultado encontrado...
            </h2>
          ) : (
            profile.map((currentProfile) => {
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
                        loading="lazy"
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
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileList;
