import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Root from "./components/Root";
import Login from "./pages/Login";
import Try from "./pages/Login/Try";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Student from "./pages/Signup/Student";
import Manufacturer from "./pages/Signup/Manufacturer";
import Researcher from "./pages/Signup/Researcher";
import Complete from "./pages/Signup/Complete";
import Suggest from "./pages/Suggest";
import Chat from "./pages/Chat";
import Mypage from "./pages/Mypage";
import SelectUser from "./pages/SelectUser";
import ResearcherHere from "./pages/ResearcherHere";

import "./App.css";
import "./assets/fonts/index.css";
import Talk from "./pages/Chat/Talk";

const App = () => (
  <RecoilRoot>
    <BrowserRouter>
      <Root>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/login/try" Component={Try} />
          <Route path="/signup" Component={Signup} />
          <Route path="/signup/researcher" Component={Researcher} />
          <Route path="/signup/manufacturer" Component={Manufacturer} />
          <Route path="/signup/student" Component={Student} />
          <Route path="/signup/complete" Component={Complete} />
          <Route path="/home" Component={Main} />
          <Route path="/suggest" Component={Suggest} />
          <Route path="/chat" Component={Chat} />
          <Route path="/chat/talk" Component={Talk} />
          <Route path="/mypage" Component={Mypage} />
          <Route path="/selectUser" Component={SelectUser} />
          <Route path="/ResearcherHere" Component={ResearcherHere} />
        </Routes>
      </Root>
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
