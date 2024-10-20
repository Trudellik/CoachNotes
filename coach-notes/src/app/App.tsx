import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import ProgrammeList from '../views/ProgrammeList';
import ExerciseList from '../views/ExerciseList';
import ExercisePage from '../views/ExercisePage';

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
            <Route path='/exercise' element={<ExerciseList />} />
            <Route path='/exercise/:id' element={<ExercisePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
