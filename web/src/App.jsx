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
import Request from "./pages/Suggest/Request";
import Chat from "./pages/Chat";
import Mypage from "./pages/Mypage";
import SelectUser from "./pages/SelectUser";
import SelectCompany from "./pages/SelectCompany";
import SelectStudent from "./pages/SelectStudent";
import ResearcherHere from "./pages/ResearcherHere";
import ResearcherFind from "./pages/ResearcherFind";
import Talk from "./pages/Chat/Talk";
import Communicate from "./pages/Communicate";

import "./App.css";
import "./assets/fonts/index.css";
import Accept from "./pages/Suggest/Accept";

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
          <Route path="/suggest/request" Component={Request} />
          <Route path="/suggest/request/accept" Component={Accept} />
          <Route path="/chat" Component={Chat} />
          <Route path="/chat/talk" Component={Talk} />
          <Route path="/mypage" Component={Mypage} />
          <Route path="/selectUser" Component={SelectUser} />
          <Route path="/selectCompany" Component={SelectCompany} />
          <Route path="/selectStudent" Component={SelectStudent} />
          <Route path="/researcherHere" Component={ResearcherHere} />
          <Route path="/researcherFind" Component={ResearcherFind} />
          <Route path="/communicate" Component={Communicate} />
        </Routes>
      </Root>
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
