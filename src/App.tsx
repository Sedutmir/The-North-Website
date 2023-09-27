import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

import Home from "./routes/home/Home.tsx";
import Privacy from "./routes/privacy/Privacy.tsx";
import Translation from "./routes/translation/Translation.tsx";
import Contact from "./routes/contact/Contact.tsx";

import './App.css';

export default function App() {
  return (
    <Router>
        <div className="container">
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/translation" element={<Translation />} />
                    <Route path="/blog" element={<h1>! ! ! !! BLOG !! ! ! ! </h1>} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </div>
    </Router>
  );
}
