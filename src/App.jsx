import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Farming from './pages/Farming';
import Staking from './pages/Staking';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="farming" element={<Farming />} />
        <Route exact path="staking" element={<Staking />} />
      </Routes>
    </BrowserRouter>
</ThemeProvider>
  )
}

export default App
