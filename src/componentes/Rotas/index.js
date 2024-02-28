import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaginaInicial from '../Paginas/PaginaInicial';
import PaginaSabores from '../Paginas/PaginaSabores';
import PaginaInfo from '../Paginas/PaginaInfo';

const router = createBrowserRouter([
  { path: "/",
    element: <PaginaInicial />
  },
  { path: "/sabores",
    element: <PaginaSabores />
  },
  { path: "/info",
    element: <PaginaInfo />
  }
]);

const Rotas = () => (
  <Router>
    <Routes>
      <Route path='/' element={<PaginaInicial />} />
      <Route path='/sabores' element={<PaginaSabores />} />
      <Route path='/info' element={<PaginaInfo />} />
    </Routes>
  </Router>
);

export default Rotas;
