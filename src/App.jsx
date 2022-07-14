import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/globalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<h1>Hello world!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
