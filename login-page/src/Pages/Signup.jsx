import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser,FaEnvelope,FaLock } from "react-icons/fa";
import "./Login.css";

export default function Signup({setPage}){

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSignup=()=>{
    alert("Account Created");
  }

  return(

    <motion.div
      className="login-container"
      initial={{opacity:0,scale:0.9}}
      animate={{opacity:1,scale:1}}
    >

      <h2>Create Account</h2>

      <div className="input-group">
        <FaUser className="input-icon"/>

        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <label>Name</label>
      </div>

      <div className="input-group">
        <FaEnvelope className="input-icon"/>

        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <label>Email</label>
      </div>

      <div className="input-group">
        <FaLock className="input-icon"/>

        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <label>Password</label>
      </div>

      <button className="main-btn" onClick={handleSignup}>
        Signup
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