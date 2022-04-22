import React, { useEffect, useRef, useState } from "react";
import AlertForm from "./AlertForm";
import InputMask from "react-input-mask";
import CropImg from "./CropImg";
const Detalhes = (props) => {
  const {
    state,
    handleChange,
    setImgFunction,
    validation,
    show,
    isValid,
    closeAlert,
  } = props;

  const inputClassName = ` col-lg-8 col-12 `;
  const labelClassName = `form-label  col-lg-4 col-12`;
  const [img, setImg] = useState("");
  const [uploading, setUploading] = useState();
  const [showCrop, setShowCrop] = useState(false);
  const errorsKeys = Object.keys(validation.errors);
  let domList = useRef([]);

  domList = errorsKeys.map((key) => {
    return document.getElementsByName(key)[0];
  });

  useEffect(() => {
    if (domList.length > 1) {
      domList.forEach((element) => {
        if (validation.errors[element.name] !== "") {
          element.style.borderColor = "red";
        } else {
          element.style.borderColor = "black";
        }
      });
    }
  }, [show]);

  function handleBlur(event) {
    const campo = domList.find((element) => element.name === event.target.name);

    if (validation.errors[event.target.name] !== "") {
      campo.placeholder = "Por favor preencha o campo obrigatório";
      campo.style.borderColor = "red";
    } else {
      campo.style.borderColor = "black";
    }
    if (isValid()) {
      closeAlert();
    }
  }

  function handleUpload(event) {
    setUploading(true);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
      setUploading(false);
      setShowCrop(true);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <AlertForm show={show} errors={validation.errors} />{" "}
      <div className="mb-2">
        <label htmlFor="nome" className={labelClassName}>
          Nome *
        </label>
        <input
          id="nome"
          type="text"
          name="nome"
          className={inputClassName}
          value={state.nome}
          placeholder="insira seu nome"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="sobrenome" className={labelClassName}>
          Sobrenome *
        </label>
        <input
          id="sobrenome"
          type="text"
          name="sobrenome"
          className={inputClassName}
          value={state.sobrenome}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="vaga" className={labelClassName}>
          Vaga
        </label>
        <select
          id="vaga"
          type="text"
          name="vaga"
          className={inputClassName}
          value={state.vaga}
          onChange={handleChange}
        >
          <option defaultValue={true}>selecione uma das opções</option>
          <option value="Desenvolvedor Front-end">
            Desenvolvedor Front-end
          </option>
          <option value="Desenvolvedor Back-end">Desenvolvedor Back-end</option>
          <option value="Desenvolvedor Fullstack">
            Desenvolvedor Fullstack
          </option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="senioridade" className={labelClassName}>
          Senioridade
        </label>
        <select
          id="senioridade"
          type="text"
          name="senioridade"
          className={inputClassName}
          value={state.senioridade}
          onChange={handleChange}
        >
          <option defaultValue={true}>selecione uma das opções</option>
          <option value="Júnior">Júnior</option>
          <option value="Pleno">Pleno</option>
          <option value="Sênior">Sênior</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="idade" className={labelClassName}>
          Idade
        </label>
        <input
          id="idade"
          type="text"
          name="idade"
          className={inputClassName}
          value={state.idade}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="dataNascimento" className={labelClassName}>
          Data de nascimento
        </label>
        <input
          id="dataNascimento"
          type="date"
          name="dataNascimento"
          className={inputClassName}
          value={state.dataNascimento}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="estadoCivil" className={labelClassName}>
          Estado civil
        </label>
        <input
          id="estadoCivil"
          type="text"
          name="estadoCivil"
          className={inputClassName}
          value={state.estadoCivil}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="celular" className={labelClassName}>
          Celular
        </label>
        <InputMask
          id="celular"
          type="text"
          name="celular"
          mask="(99) 99999-9999"
          placeholder="(xx) xxxxx-xxxx"
          className={inputClassName}
          value={state.celular}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className={labelClassName}>
          Email *
        </label>
        <input
          id="email"
          type="text"
          name="email"
          className={inputClassName}
          value={state.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="imagem" className={labelClassName}>
          Foto
        </label>
        <input type="file" id="imagem" name="imagem" onChange={handleUpload} />
        {uploading ? (
          "  Uploading..."
        ) : (
          <CropImg
            uploadedImg={img}
            cvImage={state.imagem}
            showCrop={showCrop}
            setShowCrop={setShowCrop}
            setImg={setImgFunction}
          />
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="sobre" className={labelClassName}>
          Sobre
        </label>
        <textarea
          id="sobre"
          type="text"
          name="sobre"
          value={state.sobre}
          className={inputClassName}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Detalhes;
