import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ThesisServices from './pages/ThesisServices/ThesisServices';
import PublicationServices from './pages/PublicationServices/PublicationServices';
import Contact from './pages/Contact/Contact';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/thesis-services" element={<ThesisServices />} />
        <Route path="/publication-services" element={<PublicationServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <FloatingWhatsApp />
      <Footer />
    </Router>
  );
}

export default App;
