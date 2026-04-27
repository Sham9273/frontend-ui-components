import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

export default function Login({ setPage }) {

  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    setToast("Login Successful");

    setTimeout(() => {
      setToast(null);
    }, 2500);

  }

  return (

    <motion.div
      className="login-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >

      <h2>Login</h2>

      <div className="input-group">
        <FaEnvelope className="input-icon" />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Email</label>
      </div>

      <div className="input-group">

        <FaLock className="input-icon" />

        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Password</label>

        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>

      </div>

      <button className="main-btn" onClick={handleLogin}>
        Login
      </button>

      <div className="login-links">

        <span onClick={() => setPage("signup")}>
          Signup
        </span>

        <span onClick={() => setPage("forgot")}>
          Forgot password?
        </span>

      </div>

      <button
        className="back-btn"
        onClick={() => setPage(null)}
      >
        ← Back
      </button>

      {/* Toast */}
      {toast && (
        <div className="toast success">
          {toast}
        </div>
      )}

    </motion.div>

  )
}