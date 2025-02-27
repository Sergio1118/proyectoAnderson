import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login.jsx";
import Registro from "./components/singu/sigum.jsx";

function App() {
  
  return (
    <Router>
      {/* Navbar persistente en todas las páginas */}
      <Routes>
        <Route
          path="/registro"
          element={
            <>
              
              <Registro/>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login/>
            </>
          }
        />
        <Route
          path="/recuperar"
          element={
            <>
              
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
            
            </>
          }
        />

        <Route
          path="/dashprincipal"
          element={
            <>
              
            </>
          }
        />


        <Route
          path="/dash"
          element={
            <>
              
            </>
          }
        />
         <Route
          path="/actividad"
          element={
            <>
             
            </>
          }
        />
        <Route
          path="/password"
          element={
            <>
             
            </>
          }
        />
         <Route
          path="/trabajador"
          element={
            <>
              
            </>
          }
        />
        <Route
          path="/plantacion"
          element={
            <>
             
            </>
          }
        />
        <Route
          path="/informes"
          element={
            <>
              
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;