import { Route, Routes } from "react-router-dom";
import { constants } from "../assets/constants";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";

const { paths } = constants;

function RootRouter() {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.signIn} element={<SignIn />} />
      <Route path={paths.signUp} element={<SignUp />} />
      <Route path={"*"} element={<SignIn />} />
    </Routes>
  );
}

export default RootRouter;
