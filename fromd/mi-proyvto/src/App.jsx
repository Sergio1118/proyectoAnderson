import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <Router>
      {/* Navbar persistente en todas las páginas */}
      <Routes>
        <Route
          path="/registro"
          element={
            <>
              
              
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              
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