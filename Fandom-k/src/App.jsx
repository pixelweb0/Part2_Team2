import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle.styled';
import NotFoundPage from './pages/NotFoundPage';
import Landing from './pages/Landing';
import ListPage from './pages/ListPage';
import mypage from './pages/mypage';
import { CreditProvider } from './contexts/CreditContext';

function App() {
  return (
    <>
      <GlobalStyle />

      <CreditProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/MyPage" element={<mypage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CreditProvider>
    </>
  );
}

export default App;
