import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CvDelete() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmar = window.confirm("Você deseja deletar o seu CV?");
    console.log(params);
    if (confirmar) {
      axios
        .delete(`http://localhost:4000/perfis/${params.id}`)
        .then((response) => {
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
        });
    }

    navigate("/");
  }, [params.id, navigate]);

  return <p>...</p>;
}

export default CvDelete;
