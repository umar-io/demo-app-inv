import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
