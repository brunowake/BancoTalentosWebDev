import { Route, Routes } from "react-router-dom";
import "./App.css";
import CvAdicionar from "./pages/CvAdicionar";
import ProfileList from "./pages/ProfileList";
import CvDetails from "./pages/CvDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Profissional from "./components/Profissional";
import Formacao from "./components/Formacao";
import Observacao from "./components/Observacao";
import Projetos from "./components/Projetos";
import RedeSocial from "./components/RedeSocial";
import CvEditar from "./pages/CvEditar";
import BuscarCv from "./pages/BuscarCv";
import CvDelete from "./pages/CvDelete";
import Navbar from "./components/NavBar";

// npm run dev:server - para rodar a API
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          {/* '/' -> profileList */}
          <Route path="/" element={<ProfileList />} />

          <Route path="/buscarCv" element={<BuscarCv />} />

          {/* /editar -> criar componente editar  */}
          <Route path="/editar/:codigoCadastro" element={<CvEditar />}>
            <Route path="profissional/:stateKey" element={<Profissional />} />
            <Route path="formacao/:stateKey" element={<Formacao />} />
            <Route path="competencias/:stateKey" element={<Observacao />} />
            <Route path="projetos/:stateKey" element={<Projetos />} />
          </Route>
          {/* /criar  */}
          <Route path="/criar" element={<CvAdicionar />}>
            <Route path="profissional/:stateKey" element={<Profissional />} />
            <Route path="formacao/:stateKey" element={<Formacao />} />
            <Route path="competencias/:stateKey" element={<Observacao />} />
            <Route path="projetos/:stateKey" element={<Projetos />} />
          </Route>

          {/* 'cv' -> criar componente de cv */}
          <Route path="/cv/:id" element={<CvDetails />} />

          {/* 'deletar perfil' -> criar componente de deletar */}
          <Route path="/cv/delete" element={<CvDelete />} />
          {/* '*' pagina de erro */}

          <Route path="*" element={<div>erro</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
