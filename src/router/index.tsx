import { Route, Routes } from "react-router-dom";
import { constants } from "../assets/constants";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";

const {
  paths: { home, signIn, signUp },
} = constants;

function RootRouter() {
  return (
    <Routes>
      <Route path={home} element={<Home />} />
      <Route path={signIn} element={<SignIn />} />
      <Route path={signUp} element={<SignUp />} />
      <Route path={"*"} element={<SignIn />} />
    </Routes>
  );
}

export default RootRouter;
