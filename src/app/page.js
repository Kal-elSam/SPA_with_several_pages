"use client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/components/Home';
import AdditionalPage from '@/components/AdditionalPage';
import ErrorPage from '@/components/ErrorPage';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/map" element={<Map />} />
        <Route path="/additional" element={<AdditionalPage />} />
        <Route path="/error/401" element={<ErrorPage errorCode="401" message="Unauthorized" />} />
        <Route path="/error/403" element={<ErrorPage errorCode="403" message="Forbidden" />} />
        <Route path="/error/404" element={<ErrorPage errorCode="404" message="Page Not Found" />} />
      </Routes>
    </Router>
  );
}

export default App;
