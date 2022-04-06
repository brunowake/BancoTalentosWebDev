import { Route, Routes } from "react-router-dom";
import "./App.css";
import CvAdicionar from "./pages/CvAdicionar";
import ProfileList from "./pages/ProfileList";
import CvDetails from "./pages/CvDetails";

function App() {
  return (
    <div>
      <Routes>
        {/* '/' -> profileList */}
        <Route path="/" element={<ProfileList />} />
        {/* /editar -> criar componente editar  */}
        <Route path="/editar" element={<div>editar</div>} />
        {/* /criar  */}
        <Route path="/criar" element={<CvAdicionar />} />
        {/* 'cv' -> criar componente de cv */}
        <Route path="/cv/:id" element={<CvDetails />} />
        {/* '*' pagina de erro */}
        <Route path="*" element={<div>erro</div>} />
      </Routes>
    </div>
  );
}

export default App;
