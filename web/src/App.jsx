import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Root from "./components/Root";
import Main from "./pages/Main";
import Researcher from "./pages/Signup/Researcher";
import Suggest from "./pages/Suggest";
import Chat from "./pages/Chat";
import Mypage from "./pages/Mypage";
import SelectUser from "./pages/SelectUser";
import ResearcherHere from "./pages/ResearcherHere";

import "./App.css";
import "./assets/fonts/index.css";

const App = () => (
  <RecoilRoot>
    <BrowserRouter>
      <Root>
        <Routes>
          <Route path="/signup" Component={Researcher} />
          <Route path="/home" Component={Main} />
          <Route path="/suggest" Component={Suggest} />
          <Route path="/chat" Component={Chat} />
          <Route path="/mypage" Component={Mypage} />
          <Route path="/selectUser" Component={SelectUser} />
          <Route path="/ResearcherHere" Component={ResearcherHere} />
        </Routes>
      </Root>
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
