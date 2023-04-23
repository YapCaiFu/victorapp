import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Main from './screens/Main/Main';
import GlobalStyle from 'globalStyles';
import { uiIsLightSelector } from 'redux/ui/selector';
import { useAppSelector } from 'redux/store';

function App() {

  const uiIsLight = useAppSelector(uiIsLightSelector);

  return (
    <>
      <GlobalStyle isLight={uiIsLight} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          {/* <Route path="/setup" element={<Setup />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
