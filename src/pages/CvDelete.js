import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function CvDelete() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .delete(`/perfis/${params.id}`)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
    navigate(-1);
  }, [params.id, navigate]);

  return <p>...</p>;
}

export default CvDelete;
