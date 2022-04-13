function SideBar() {
  function handleClick() {}
  return (
    <div style={{ maxHeight: "50vh" }}>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="true"
              aria-controls="flush-collapseOne"
            >
              Vaga
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body ps-0 pe-0">
              <ul className="list-group">
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="estagiario"
                    aria-label="..."
                  />
                  Estágiario
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="junior"
                    aria-label="..."
                  />
                  Júnior{" "}
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="senior"
                    aria-label="..."
                  />
                  Sênior{" "}
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="gerente"
                    aria-label="..."
                  />
                  Gerente de Projetos{" "}
                </li>
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
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="sp"
                    aria-label="..."
                  />
                  SP
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="rj"
                    aria-label="..."
                  />
                  RJ{" "}
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="mg"
                    aria-label="..."
                  />
                  MG{" "}
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="pr"
                    aria-label="..."
                  />
                  PR{" "}
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
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="ingles"
                    aria-label="..."
                  />
                  Inglês
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="espanhol"
                    aria-label="..."
                  />
                  Espanhol{" "}
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="javascript"
                    aria-label="..."
                  />
                  JavaScript{" "}
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value="react"
                    aria-label="..."
                  />
                  React{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
