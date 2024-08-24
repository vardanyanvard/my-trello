import { Link } from "react-router-dom";
import { constants } from "../../assets/constants";
import styles from "./home.module.scss";

function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Link to={constants.paths.signIn}>Sign In</Link>
      <Link to={constants.paths.signUp}>Sign Up</Link>
    </div>
  );
}

export default Home;
