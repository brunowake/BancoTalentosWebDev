import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const RedeSocial = (props) => {
  const outletcontext = useOutletContext();
  const params = useParams();
  const [redeSocialState, SetRedeSocialState] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    github: "",
  });

  function handleChange(event) {
    SetRedeSocialState({
      ...redeSocialState,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newArr = [...outletcontext.state[params.stateKey], redeSocialState];
    outletcontext.setState((prevState) => {
      const newState = { ...prevState };
      newState[params.stateKey] = newArr;
      return newState;
    });
  }

  function handleDeleteClick(index) {
    const newArr = [...outletcontext.state[params.stateKey]];
    newArr.splice(index, 1);
    outletcontext.setState((prevState) => {
      const newState = { ...prevState };
      newState[params.stateKey] = newArr;
      return newState;
    });
  }
  return (
    <div>
      <div>
        <label htmlFor="instagram">Instagram:</label>
        <input
          id="instagram"
          type="text"
          name="instagram"
          value={redeSocialState.instagram}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="facebook">Facebook:</label>
        <input
          id="facebook"
          type="text"
          name="facebook"
          value={redeSocialState.facebook}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="twitter">Twitter:</label>
        <input
          id="twitter"
          type="text"
          name="twitter"
          value={redeSocialState.twitter}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="linkedin">Linkedin:</label>
        <input
          id="linkedin"
          type="text"
          name="linkedin"
          value={redeSocialState.linkedin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="github">Github:</label>
        <input
          id="github"
          type="text"
          name="github"
          value={redeSocialState.github}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleClick}>adicionar Redes Sociais</button>

      <ul>
        {outletcontext.state[params.stateKey].map((element, index) => {
          return (
            <li key={index}>
              {`instagram: ${element.instagram} facebook: ${element.facebook} twitter: ${element.twitter} linkedin:${element.linkedin} github: ${element.github}`}
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  handleDeleteClick(index);
                }}
              >
                deletar
              </button>
            </li>
          );
        })}
      </ul>
      {/*     instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    github: "", */}
    </div>
  );
};

export default RedeSocial;
