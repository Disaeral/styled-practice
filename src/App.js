import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import Theme from "./Theme";

function App() {
  return (
    <Theme>
    <BrowserRouter>
      <Navbar />
      <Main />
      <Footer />
    </BrowserRouter>
    </Theme>
  );
}

export default App;
