// React 라이브러리 불러오기
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages Component
import Main from "./components/pages/Main";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Main />} />
        {/* Sub Page */}
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
