import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Detalhes from "../components/Detalhes";
import Endereco from "../components/Endereco";
import RedeSocial from "../components/RedeSocial";
import RegistroTabs from "../components/RegistroTabs";
import { useNavigate, Link } from "react-router-dom";
import ReactInputMask from "react-input-mask";
import ConfirmaModal from "../components/ConfirmaModal";
import emailjs from "@emailjs/browser";
import api from "../api/api";
import "./CvDetails.css";

const CvAdicionar = () => {
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

  const [validation, setValidation] = useState({
    errors: {},
    validForm: false,
  });
  const navigate = useNavigate();

  const [buscarCEP, setBuscarCEP] = useState("");
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  function handleShow() {
    setModal(true);
  }

  function createCodigoResgistro() {
    const inicialNome = cv.detalhes.nome.toLowerCase();
    const inicialSobrenome = cv.detalhes.sobrenome.toLowerCase();
    const codigo = `${inicialNome}${inicialSobrenome}${cv.detalhes.idade}`;

    setCv({ ...cv, codigoRegistro: codigo });
  }

  function closeAlert() {
    setShow(false);
  }

  function isValid() {
    const erro = Object.values(validation.errors);
    let valor = false;
    for (const value of erro) {
      console.log(value);
      if (!value) {
        valor += true;
      }
    }

    return valor / 3 === 1 ? true : false;
  }

  function scrollToError() {
    setShow(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    isValid()
      ? api
          .post("/perfis", cv)
          .then((response) => {
            enviarEmail();
            handleShow();
            setShow(false);
          })
          .catch((err) => console.error(err))
      : scrollToError();
  }

  function handleDetalhesChange(event) {
    const aux = { ...cv.detalhes, [event.target.name]: event.target.value };

    setCv({ ...cv, detalhes: aux });
  }
  function handleRedeSocialChange(event) {
    const aux = { ...cv.redeSocial, [event.target.name]: event.target.value };

    console.log(aux);
    setCv({ ...cv, redeSocial: aux });
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

  function checkValidation() {
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
  }

  useEffect(() => {
    checkValidation();
  }, [cv.detalhes.nome, cv.detalhes.sobrenome, cv.detalhes.email]);

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

  function setImagem(img) {
    setCv({ ...cv, detalhes: { ...cv.detalhes, imagem: img } });
  }

  function enviarEmail() {
    emailjs
      .send(
        "service_my4mj62",
        "template_sqv07mz",
        {
          to_name: `${cv.detalhes.nome} ${cv.detalhes.sobrenome}`,
          codigoRegistro: cv.codigoRegistro,
          reply_to: cv.detalhes.email,
        },
        "E6emHKkxpucdisAsH"
      )
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  return (
    <div className="container ">
      <form
        className="d-flex justify-content-center flex-column "
        onSubmit={handleSubmit}
      >
        <ConfirmaModal
          title="Parabéns, Cadastro concluído com sucesso!"
          variant="primary"
          confirmationText="Ok"
          show={modal}
          handleClose={false}
          handleConfirmation={() => {
            navigate(`/`);
            setModal(false);
          }}
        >
          O seu código é {cv.codigoRegistro} e será enviado para o e-mail{" "}
          {cv.detalhes.email}
        </ConfirmaModal>

        <p className="mt-5 pt-5"></p>
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

        <p className="h3 text-start mt-2 mb-3">Rede Social</p>
        <RedeSocial
          state={cv.redeSocial}
          handleChange={handleRedeSocialChange}
        />
        <hr />

        <p className="h3 text-start mt-2 mb-3">Endereço</p>
        <div className="input-group mb-3 mt-3">
          <ReactInputMask
            id="CEP"
            type="text"
            name="CEP"
            className="form-control rounded-pill"
            value={buscarCEP}
            mask="99999-999"
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
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary align-text-center border-0 "
            style={{ backgroundColor: "#4682B4" }}
            type="submit"
            onClick={createCodigoResgistro}
          >
            Finalizar Cadastro
          </button>
        </div>
      </form>
    </div>
  );
};

export default CvAdicionar;
