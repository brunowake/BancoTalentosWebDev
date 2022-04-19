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
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse show"
            aria-labelledby="flush-headingOne"
          >
            <div class="accordion-body ps-0 pe-0">
              <ul className="list-group">
                {props.vaga.map((currentVaga, index) => {
                  return (
                    <li class="list-group-item border-0">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        checked={props.state[index]}
                        value={currentVaga}
                        aria-label="..."
                        onChange={() => props.change(index)}
                      />
                      {currentVaga}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body ps-0 pe-0">
              <ul className="list-group">
                {props.estado.map((currentEstado) => {
                  return (
                    <li class="list-group-item border-0">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        value={currentEstado}
                        // checked={check}
                        aria-label="..."
                        // onChange={handleCheckboxChange}
                      />
                      {currentEstado}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
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
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body ps-0 pe-0">
              <ul className="list-group">
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="sp"
                    aria-label="..."
                  />
                  USP
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="rj"
                    aria-label="..."
                  />
                  UNICAMP{" "}
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="mg"
                    aria-label="..."
                  />
                  UNESP{" "}
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="pr"
                    aria-label="..."
                  />
                  Mackenzie{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div class="accordion-body ps-0 pe-0">
              <ul className="list-group">
                {props.competencias.map((currentCompetencia) => {
                  return (
                    <li class="list-group-item border-0">
                      <input
                        class="form-check-input me-1"
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
