import React from "react";
import Head from "next/head";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <>
      <Head>
        <title>REGISTER</title>
      </Head>
      <div className={styles.account_container}>
        <div className={styles.account_title}>
          <a className={styles.account_link} href="/">
            HOME
          </a>
          <a className={styles.account_link1} href="">
            REGISTER AN ACCOUNT
          </a>
        </div>
        <div className={styles.my_account}>
          <h1 className={styles.account_heading}>REGISTER</h1>
          <form className={styles.account_form}>
            <h2 className={styles.account_name}>Register An Account</h2>
            <div class={styles.form}>
              <label
                for="exampleInputEmail1"
                className="form-label"
                style={{
                  color: "#3a3737",
                  fontSize: "18px",
                  paddingBottom: "4px",
                }}
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                style={{
                  height: "50px",
                  outline: "none",
                  border: "none",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  paddingLeft: "14px",
                  width: "380px",
                }}
              />
              <div
                id="emailHelp"
                className="form-text"
                style={{ padding: "8px 0 20px" }}
              >
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className={styles.form}>
              <label
                for="exampleInputPassword1"
                className="form-label"
                style={{
                  color: "#3a3737",
                  fontSize: "18px",
                  paddingBottom: "4px",
                }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password..."
                style={{
                  height: "50px",
                  outline: "none",
                  border: "none",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  paddingLeft: "14px",
                  width: "380px",
                }}
              />
            </div>
            <div className={styles.form_wrap}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  height: "50px",
                  outline: "none",
                  border: "none",
                  border: "1px solid #ccc",
                  fontSize: "22px",
                  paddingLeft: "14px",
                  width: "380px",
                  cursor: "pointer",
                  backgroundColor: "#e9c61b",
                  marginTop: "50px",
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
