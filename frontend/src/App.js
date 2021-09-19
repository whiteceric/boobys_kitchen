import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Book from "./components/Book/Book";
import Contact from "./components/Contact/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact render={(props) =>
        <>
          <Home />
          <About />
          <Book />
          <Contact />
        </>
      } />
    </Router>
  );
}

export default App;
