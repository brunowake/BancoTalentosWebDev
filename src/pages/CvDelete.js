import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CvDelete() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(`http://localhost:4000/perfis/${params.id}`)
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
