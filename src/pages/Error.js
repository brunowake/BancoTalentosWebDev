import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="container d-flex justify-content-center h-100 mt-5 pt-2">
      <div className="d-flex m-5 flex-column align-items-center">
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
          className="btn btn-success border-0 w-75 ms-3"
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
