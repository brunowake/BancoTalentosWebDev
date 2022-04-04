import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CvDetails() {
  const [state, setState] = useState({});

  console.log(useParams());

  const { id } = useParams();

  useEffect(() => {
    async function fetchCV() {
      try {
        const response = await axios.get("banco de dados");
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchCV();
  }, [id]);
  return (
    <div>
      <section>
        <img src="state.img" alt={`${state.firstName} picture`} />
        <div>
          <h1>
            {state.firstName} {state.lastName}
          </h1>
          <p>
            {state.cidade}, {state.estado}
          </p>
          <p>{state.dataAniversario} idade</p>
          <p>{state.email}</p>
          <h2>{state.vaga}</h2>
        </div>
        <hr />
        <div>
          <h2>Sobre</h2>
          <p>{state.descricao}</p>
        </div>
        <hr />
        <div>
          <h2>Experiências profissionais</h2>
          {state.experiencias.map((currentCVObj) => (
            <p>{state.experiencias}</p>
          ))}
        </div>
        <hr />
        <div>
          <h2>Competências</h2>
          <ul>
            {state.competencias.map((currentCVObj) => (
              <li>{state.competencias}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CvDetails;
