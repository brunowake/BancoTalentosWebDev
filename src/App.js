import { Route, Routes } from "react-router-dom";
import "./App.css";
import CvAdicionar from "./pages/CvAdicionar";
import ProfileList from "./pages/ProfileList";
import "bootstrap/dist/css/bootstrap.min.css";
import Profissional from "./components/Profissional";
import Formacao from "./components/Formacao";
import Observacao from "./components/Observacao";
import Projetos from "./components/Projetos";
import RedeSocial from "./components/RedeSocial";

function App() {
  return (
    <div>
      <Routes>
        {/* '/' -> profileList */}
        <Route path="/" element={<ProfileList />} />
        {/* /editar -> criar componente editar  */}
        <Route path="/editar" element={<div>editar</div>} />
        {/* /criar  */}
        <Route path="/criar" element={<CvAdicionar />}>
          <Route path="profissional/:stateKey" element={<Profissional />} />
          <Route path="formacao/:stateKey" element={<Formacao />} />
          <Route path="observacao/:stateKey" element={<Observacao />} />
          <Route path="projetos/:stateKey" element={<Projetos />} />
          <Route path="redesocial/:stateKey" element={<RedeSocial />} />
        </Route>
        {/* 'cv' -> criar componente de cv */}
        <Route path="/cv/:id" element={<div>cv</div>} />
        {/* '*' pagina de erro */}
        <Route path="*" element={<div>erro</div>} />
      </Routes>
    </div>
  );
}

export default App;
