import api from "../api/api";
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
import Pdflayout from "../components/PdfLayout";
import axios from "axios";

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
      senioridade: "",
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

  const [validation, setValidation] = useState({
    errors: { nome: "" },
    validForm: false,
  });

  const [show, setShow] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    api
      .get(`/perfis/?codigoRegistro=${codigoCadastro}`)
      .then((response) => {
        const data = response.data[0];
        response.data.length === 0 ? navigate("*") : setCv({ ...data });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function closeAlert() {
    setShow(false);
  }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   axios
  //     .patch(`http://localhost:4000/perfis/${cv.id}`, cv)
  //     .then((response) => {
  //       navigate("/");
  //     })
  //     .catch((err) => console.error(err));
  // }

  async function handleSubmit(event) {
    event.preventDefault();

    isValid()
      ? api
          .patch(`/perfis/${cv.id}`, cv)
          .then((response) => {
            setShow(false);
            navigate("/");
          })
          .catch((err) => console.error(err))
      : scrollToError();
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

  function isValid() {
    const erro = Object.values(validation.errors);
    let valor = false;
    for (const value of erro) {
      if (!value) {
        valor += true;
      }
    }

    return valor / 3 === 1 ? true : false;
  }

  function handleRedeSocialChange(event) {
    const aux = { ...cv.redeSocial, [event.target.name]: event.target.value };

    setCv({ ...cv, redeSocial: aux });
  }

  function setImagem(img) {
    setCv({ ...cv, detalhes: { ...cv.detalhes, imagem: img } });
  }

  useEffect(() => {
    if (!cv.detalhes.nome) {
      setValidation((prevState) => {
        prevState.errors["nome"] = "Campo nome nao pode estar vazio";

        return prevState;
      });
    } else {
      setValidation((prevState) => {
        prevState.errors["nome"] = "";

        return prevState;
      });
    }
    if (!cv.detalhes.sobrenome) {
      setValidation((prevState) => {
        prevState.errors["sobrenome"] = "Campo sobrenome nao pode estar vazio";

        return prevState;
      });
    } else {
      setValidation((prevState) => {
        prevState.errors["sobrenome"] = "";

        return prevState;
      });
    }
    if (!cv.detalhes.email) {
      setValidation((prevState) => {
        prevState.errors["email"] = "Campo email nao pode estar vazio";

        return prevState;
      });
    } else {
      setValidation((prevState) => {
        if (
          !cv.detalhes.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
        ) {
          prevState.errors["email"] = "Formato de email invalido";
        } else {
          prevState.errors["email"] = "";
        }

        return prevState;
      });
    }
  }, [cv.detalhes.nome, cv.detalhes.sobrenome, cv.detalhes.email]);

  function scrollToError() {
    setShow(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  const handleShowPreview = () => setShowPreview(true);

  return (
    <div className="container mt-5 ">
      <div className="mb-3 mt-3 text-end">
        <button className="btn btn-danger mt-5 border-0" onClick={handleShow}>
          Deletar
        </button>
        <button
          className="btn btn-primary ms-3 mt-5 border-0"
          style={{ backgroundColor: "#4682B4" }}
          onClick={handleShowPreview}
        >
          Preview
        </button>

        <ConfirmaModal
          title="Preview!"
          variant="primary"
          show={showPreview}
          fullscreen={true}
          handleClose={() => setShowPreview(false)}
        >
          <Pdflayout state={cv} />
        </ConfirmaModal>

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
        <p className="mt-3"></p>
        <p className="h1 text-center mb-3">Detalhes</p>
        <Detalhes
          state={cv.detalhes}
          handleChange={handleDetalhesChange}
          setImgFunction={setImagem}
          validation={validation}
          show={show}
          isValid={isValid}
          closeAlert={closeAlert}
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
            style={{ color: "#4682B4" }}
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
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary border-0"
            style={{ backgroundColor: "#4682B4" }}
          >
            Atualizar Cadastro
          </button>
        </div>
      </form>
    </div>
  );
};

export default CvEditar;
