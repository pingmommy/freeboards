import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <h1>로그인</h1>
      <label className={styles.label}>아이디</label>
      <input className={styles.input} type="text" />
      <label>비밀번호</label>
      <input className={styles.input} type="password" />
    </div>
  );
}
