import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CvDelete() {
  const { codigoregistro } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(`http://localhost:4000/perfis/${codigoregistro}`)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
    // async function fetchCV() {
    //   try {
    //     const response = await axios.delete(
    //       `http://localhost:4000/perfis/${id}`
    //     );
    //     navigate("home");
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    // fetchCV();
  }, [codigoregistro, navigate]);

  return <p>...</p>;
}

export default CvDelete;
