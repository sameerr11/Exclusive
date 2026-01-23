import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Certifications from './pages/Certifications';
import Workflow from './pages/Workflow';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import EvErp from './pages/EvErp';
import EvSms from './pages/EvSms';
import EvCs from './pages/EvCs';
import EvTc from './pages/EvTc';
import EvDms from './pages/EvDms';
import EvTss from './pages/EvTss';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
        <Route path="/workflow" element={<PageTransition><Workflow /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/everp" element={<PageTransition><EvErp /></PageTransition>} />
        <Route path="/ev-sms" element={<PageTransition><EvSms /></PageTransition>} />
        <Route path="/ev-cs" element={<PageTransition><EvCs /></PageTransition>} />
        <Route path="/ev-tc" element={<PageTransition><EvTc /></PageTransition>} />
        <Route path="/ev-dms" element={<PageTransition><EvDms /></PageTransition>} />
        <Route path="/ev-tss" element={<PageTransition><EvTss /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
