import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfileList() {
  const navigate = useNavigate();

  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("cvs api")
      .then((response) => {
        setState([...response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div>
        {state.map((currentProfile) => {
          return (
            <div
              key={currentProfile.id}
              onClick={() => navigate("pagina do cv")}
            >
              <div>
                <div>
                  <img src={currentProfile.img} alt={currentProfile.name} />
                </div>
                <div>
                  <div>
                    <h5>{currentProfile.name}</h5>
                    <p>
                      {currentProfile.cidade}, {currentProfile.estado}
                    </p>
                    <p>
                      <b>{currentProfile.vaga}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileList;
