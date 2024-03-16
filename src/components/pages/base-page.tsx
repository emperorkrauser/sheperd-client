import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CryptoPage } from './crypto-page';

export const BasePage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CryptoPage symbol="bitcoin" />} />
          <Route path="/btc" element={<CryptoPage symbol="bitcoin" />} />
          <Route path="/eth" element={<CryptoPage symbol="ethereum" />} />
          <Route path="/doge" element={<CryptoPage symbol="dogecoin" />} />
          <Route path="/*" element={<>404 not Found</>} />
        </Routes>
      </Router>
    </>
  );
};
