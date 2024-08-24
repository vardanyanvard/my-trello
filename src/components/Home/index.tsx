import { Link } from "react-router-dom";
import { constants } from "../../assets/constants";
import styles from "./home.module.scss";
import "../../assets/fonts/fonts.scss";

function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContent}>
        <p>
          If you are not registered on the site you must be{" "}
          <span>
            <Link to={constants.paths.signIn} className={styles.signBtn}>
              SignIn
            </Link>
          </span>
          , otherwise{" "}
          <span>
            <Link to={constants.paths.signUp} className={styles.signBtn}>
              SignUp
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
