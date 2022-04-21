import Accordion from "react-bootstrap/Accordion";
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
      <Accordion alwaysOpen flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Vaga</Accordion.Header>
          <Accordion.Body>
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Nível</Accordion.Header>
          <Accordion.Body>
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Estado</Accordion.Header>
          <Accordion.Body>
            <ul className="list-group">
              {props.estado.map((currentEstado, index) => {
                return (
                  <li key={currentEstado} className="list-group-item border-0">
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
            </ul>{" "}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Formação</Accordion.Header>
          <Accordion.Body>
            <ul className="list-group">
              {props.estudo.map((currentEstudo, index) => {
                return (
                  <li key={currentEstudo} className="list-group-item border-0">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value={currentEstudo}
                      checked={props.stateFormacao[index]}
                      onChange={() => props.changeFormacao(index)}
                      aria-label="..."
                    />
                    {currentEstudo}
                  </li>
                );
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Competências</Accordion.Header>
          <Accordion.Body>
            <ul className="list-group">
              {props.competencias.map((currentCompetencia, index) => {
                return (
                  <li
                    key={currentCompetencia}
                    className="list-group-item border-0"
                  >
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value={currentCompetencia}
                      checked={props.stateCompetencias[index]}
                      aria-label="..."
                      onChange={() => props.changeCompetencias(index)}
                    />
                    {currentCompetencia}
                  </li>
                );
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SideBar;
