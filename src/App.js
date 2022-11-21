import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/LoginRegister/Register"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
