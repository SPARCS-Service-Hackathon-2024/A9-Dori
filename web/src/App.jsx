import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Root from "./components/Root";
import Main from "./pages/Main";
import Researcher from "./pages/Signup/Researcher";

import "./App.css";

const App = () => (
  <RecoilRoot>
    <BrowserRouter>
      <Root>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/signup" Component={Researcher} />
        </Routes>
      </Root>
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
