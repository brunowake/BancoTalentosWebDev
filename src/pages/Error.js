import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="m-5 p-5">
      <div className="d-flex m-5 p-5 row justify-content-center mh-100">
        <h1
          className="d-flex justify-content-center"
          style={{ color: "#4682B4" }}
        >
          [ 404 ]
        </h1>
        <p className="text-center fs-4 fw-normal" style={{ color: "#4682B4" }}>
          A página que você procura não está mais disponível
        </p>
        <Link
          className="btn btn-success border-0 mt-5 w-50 d-flex justify-content-center"
          style={{ backgroundColor: "#4682B4" }}
          to={`/`}
        >
          Voltar para o ínicio
        </Link>
      </div>
    </div>
  );
}

export default Error;
