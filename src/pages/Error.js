import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h1 className="d-flex justify-content-center">404</h1>
      <p className="text-center fs-4 fw-normal">
        A página que você procura não está mais disponível
      </p>
      <Link
        className="btn btn-success border-0 mt-5 d-flex justify-content-center"
        style={{ backgroundColor: "#556B2F" }}
        to={`/`}
      >
        Voltar para o ínicio
      </Link>
    </div>
  );
}

export default Error;
