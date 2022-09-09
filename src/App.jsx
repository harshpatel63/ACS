import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Complaints/Form";
import Status from "./components/Complaints/Status";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <section className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
            <Footer />
        </section>
    );
}

export default App;
