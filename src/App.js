import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
