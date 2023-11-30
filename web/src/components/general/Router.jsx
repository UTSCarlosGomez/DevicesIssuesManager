import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import IssueManage from "../issues/IssueManage";
import Header from "./Header";
import AuthorizedView from "../auth/AuthorizedView";
import FormIssues from "../issues/FormIssues";
import Issues from "../issues/Issues";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <AuthorizedView>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/issues" element={<Issues />}></Route>
          <Route path="/issues/:id" element={<IssueManage />}></Route>
          <Route path="/issues/new" element={<FormIssues />}></Route>
        </Routes>
      </AuthorizedView>
    </BrowserRouter>
  )
}

export default Router
