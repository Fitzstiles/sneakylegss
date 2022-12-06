import styles from "../styles/Home.module.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <Head>
        <title>SneakyLegs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/icon.png" />
      </Head>
      <div className={styles.login__container}>
        <div className={styles.bg__img}>
          <img
            src="https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <h1>Sign Up</h1>
        <div className={styles.Signin}>
          <div className={styles.signin__details}>
            <p>Enter your credentials to Sign in</p>
            <div className={styles.email}>
              <p>Email address</p>
              <input type="email" />
            </div>
            <div className={styles.password}>
              <p>Password?</p>
              <input
                type={passwordShown ? "text" : "password"}
                onChange={(e) => setpassword(e.target.value)}
              />
              {passwordShown ? (
                <VisibilityOffIcon onClick={togglePassword} />
              ) : (
                <RemoveRedEyeOutlinedIcon onClick={togglePassword} />
              )}
            </div>
            <div className={styles.button__section}>
              <button>Sign up</button>
              <p>
                already have an account? <Link href="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
