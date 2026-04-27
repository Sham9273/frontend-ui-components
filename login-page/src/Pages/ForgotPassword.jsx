import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Login.css";

export default function ForgotPassword({setPage}){

  const [email,setEmail]=useState("");

  const handleReset=()=>{
    alert("Reset link sent");
  }

  return(

    <motion.div
      className="login-container"
      initial={{opacity:0,scale:0.9}}
      animate={{opacity:1,scale:1}}
    >

      <h2>Forgot Password</h2>

      <div className="input-group">

        <FaEnvelope className="input-icon"/>

        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <label>Email</label>

      </div>

      <button
        className="main-btn"
        onClick={handleReset}
      >
        Send Reset Link
      </button>

      <button
        className="back-btn"
        onClick={()=>setPage("login")}
      >
        ← Back to Login
      </button>

    </motion.div>

  )
}