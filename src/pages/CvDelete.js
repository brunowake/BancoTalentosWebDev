import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CvDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCV() {
      try {
        const response = await axios.delete(`cv a partir do id`);
        navigate("home");
      } catch (err) {
        console.error(err);
      }
    }
    fetchCV();
    navigate(-1);
  }, [id, navigate]);

  return <p>...</p>;
}

export default CvDelete;
