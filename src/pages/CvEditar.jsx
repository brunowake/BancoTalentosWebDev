import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Outlet,
  Route,
  Routes,
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";
import Detalhes from "../components/Detalhes";
import Endereco from "../components/Endereco";
import RedeSocial from "../components/RedeSocial";
import RegistroTabs from "../components/RegistroTabs";
import ConfirmaModal from "../components/ConfirmaModal";

const CvEditar = () => {
  const [cv, setCv] = useState({
    codigoRegistro: "",
    detalhes: {
      nome: "",
      sobrenome: "",
      idade: "",
      dataNascimento: "",
      estadoCivil: "",
      celular: "",
      vaga: "",
      email: "",
      sobre: "",
      imagem: "",
      endereco: {
        logradouro: "",
        bairro: "",
        numero: "",
        cep: "",
        complemento: "",
        localidade: "",
        uf: "",
      },
    },
    experienciaProfissional: [],
    formacao: [],
    competencias: [],
    projetos: [],
    redeSocial: {
      instagram: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      github: "",
    },
  });
  const { codigoCadastro } = useParams();

  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const [buscarCEP, setBuscarCEP] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/perfis/?codigoRegistro=${codigoCadastro}`)
      .then((response) => {
        console.log(response.data);
        setCv({ ...response.data[0] });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/perfis/${cv.id}`, cv)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  function handleDetalhesChange(event) {
    const aux = { ...cv.detalhes, [event.target.name]: event.target.value };

    setCv({ ...cv, detalhes: aux });
  }

  function handleCEPChangeAPI(event) {
    setBuscarCEP(event.target.value);
  }

  function handleCEPChangeObj(event) {
    setCv((prevState) => {
      const newState = { ...prevState };
      prevState.detalhes.endereco[event.target.name] = event.target.value;

      return newState;
    });
  }

  function handleCEPClickAPI(event) {
    event.preventDefault();
    const url = `https://viacep.com.br/ws/${buscarCEP}/json/`;
    axios
      .get(url)
      .then((response) => {
        const { logradouro, bairro, cep, complemento, localidade, uf } =
          response.data;
        const aux = {
          logradouro,
          bairro,
          numero: 0,
          cep,
          complemento,
          localidade,
          uf,
        };
        setCv((prevState) => {
          const newState = { ...prevState };
          newState.detalhes.endereco = aux;
          return newState;
        });
      })
      .catch((err) => console.error(err));
  }

  function handleRedeSocialChange(event) {
    const aux = { ...cv.redeSocial, [event.target.name]: event.target.value };

    setCv({ ...cv, redeSocial: aux });
  }

  function setImagem(img) {
    setCv({ ...cv, detalhes: { ...cv.detalhes, imagem: img } });
  }

  // const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  return (
    <div className="container ">
      <div className="mb-3 mt-3 text-end">
        <button className="btn btn-danger" onClick={handleShow}>
          Deletar
        </button>

        <ConfirmaModal
          title="Atenção!"
          variant="danger"
          confirmationText="Deletar"
          show={modal}
          handleClose={() => setModal(false)}
          handleConfirmation={() => {
            navigate(`/cv/delete/${cv.id}`);
            setModal(false);
          }}
        >
          Você deseja deletar o seu CV?{" "}
        </ConfirmaModal>
      </div>

      <form
        className="d-flex justify-content-center flex-column"
        onSubmit={handleSubmit}
      >
        <p className="h1 text-center mb-3">Detalhes</p>
        <Detalhes
          state={cv.detalhes}
          handleChange={handleDetalhesChange}
          setImgFunction={setImagem}
        />
        <hr />

        <p className="h1 text-center mb-3">Rede Social</p>
        <RedeSocial
          state={cv.redeSocial}
          handleChange={handleRedeSocialChange}
        />
        <hr />

        <p className="h1 text-center mb-3">Endereço</p>
        <div className="input-group mb-3 mt-3">
          <input
            id="CEP"
            type="text"
            name="CEP"
            className="form-control rounded-pill"
            value={buscarCEP}
            placeholder="Insira o seu CEP"
            onChange={handleCEPChangeAPI}
          />
          <button
            className="btn btn-outline-primary ms-2 rounded-pill"
            onClick={(event) => handleCEPClickAPI(event)}
          >
            Buscar CEP
          </button>
        </div>

        <Endereco
          state={cv.detalhes.endereco}
          handleChange={handleCEPChangeObj}
        />
        <hr />
        <RegistroTabs />

        <Outlet context={{ state: cv, setState: setCv }} />
        <hr />
        <button className="btn btn-primary">Atualizar Cadastro</button>
      </form>
    </div>
  );
};

export default CvEditar;
