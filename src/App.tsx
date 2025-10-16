import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import { Theme } from "./Theme";

function App() {
  return (
    <Theme>
      <Navbar />
      <Main />
      <Footer />
    </Theme>
  );
}

export default App;
