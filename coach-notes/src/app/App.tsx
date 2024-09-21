import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import ProgrammeList from '../contexts/ProgrammeList/ProgrammeList';

const Home = lazy(() => import('../views/Home'));
const NotFound = lazy(() => import('../views/NotFound'));
const ProgrammePage = lazy(() => import('../views/ProgrammePage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/programme" element={<ProgrammeList />} />
            <Route path="/programme/:id" element={<ProgrammePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
