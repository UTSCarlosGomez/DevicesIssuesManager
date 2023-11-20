import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IssueManage from "./pages/IssueManage";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/issueManage" element={<IssueManage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router