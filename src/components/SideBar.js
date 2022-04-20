import { useState } from "react";
function SideBar(props) {
  //   const vagasLength = props.vaga.length;
  //   const [checkVagas, setCheckVagas] = useState([
  //     ...new Array(props.vaga.length).fill(false),
  //   ]);

  //   function handleCheckboxChange(i) {
  //     const updateCheckVagas = checkVagas.map((item, index) => {
  //       return index === i ? !item : item;
  //     });

  //     setCheckVagas(updateCheckVagas);
  //     console.log(checkVagas);
  //     console.log(props.vaga[i]);
  //   }

  return (
    <div style={{ maxHeight: "50vh" }}>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#vaga"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Vaga
            </button>
          </h2>
          <div
            id="vaga"
            className="accordion-collapse collapse show"
            aria-labelledby="flush-headingOne"
          >
            <div className="accordion-body ps-0 pe-0">
              <ul className="list-group">
                {props.vaga.map((currentVaga, index) => {
                  return (
                    <li key={currentVaga} className="list-group-item border-0">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        checked={props.stateVagas[index]}
                        value={currentVaga}
                        aria-label="..."
                        onChange={() => props.changeVagas(index)}
                      />
                      {currentVaga}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#nivel"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Nivel
            </button>
          </h2>
          <div
            id="nivel"
            className="accordion-collapse collapse show"
            aria-labelledby="flush-headingOne"
          >
            <div className="accordion-body ps-0 pe-0">
              <ul className="list-group">
                {props.senioridade.map((currentNivel, index) => {
                  return (
                    <li key={currentNivel} className="list-group-item border-0">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        checked={props.stateSenior[index]}
                        value={currentNivel}
                        aria-label="..."
                        onChange={() => props.changeSenior(index)}
                      />
                      {currentNivel}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Estado{" "}
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body ps-0 pe-0">
              <ul className="list-group">
                {props.estado.map((currentEstado, index) => {
                  return (
                    <li
                      key={currentEstado}
                      className="list-group-item border-0"
                    >
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value={currentEstado}
                        checked={props.stateUf[index]}
                        aria-label="..."
                        onChange={() => props.changeUf(index)}
                      />
                      {currentEstado}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Formação
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body ps-0 pe-0">
              <ul className="list-group">
                {props.estudo.map((currentEstudo) => {
                  return (
                    <li
                      key={currentEstudo}
                      className="list-group-item border-0"
                    >
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value={currentEstudo}
                        // checked={check}
                        aria-label="..."
                        // onChange={handleCheckboxChange}
                      />
                      {currentEstudo}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body ps-0 pe-0">
              <ul classNameName="list-group">
                <li className="list-group-item border-0">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="sp"
                    aria-label="..."
                  />
                  USP
                </li>
                <li className="list-group-item border-0">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="rj"
                    aria-label="..."
                  />
                  UNICAMP{" "}
                </li>
                <li className="list-group-item border-0">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="mg"
                    aria-label="..."
                  />
                  UNESP{" "}
                </li>
                <li className="list-group-item border-0">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value="pr"
                    aria-label="..."
                  />
                  Mackenzie{" "}
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Competências
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body ps-0 pe-0">
              <ul className="list-group">
                {props.competencias.map((currentCompetencia) => {
                  return (
                    <li
                      key={currentCompetencia}
                      className="list-group-item border-0"
                    >
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value={currentCompetencia}
                        // checked={check}
                        aria-label="..."
                        // onChange={handleCheckboxChange}
                      />
                      {currentCompetencia}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
