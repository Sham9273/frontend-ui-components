import { Canvas } from "@react-three/fiber";
import { useState, lazy, Suspense } from "react";
import "./App.css";

const Scene = lazy(() => import("./Pages/Scene"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Signup = lazy(() => import("./Pages/Signup"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));

export default function App() {

  const [page,setPage] = useState(null); 
  // null = home
  // login | signup | forgot

  return (

    <div className="app-container">

      <Canvas className="canvas" frameloop="demand" dpr={[1,1.5]}>
        <Suspense fallback={null}>
          <Scene/>
        </Suspense>
      </Canvas>

      <div className="overlay dark"/>

      <div className="content">

        <div className={`left-panel ${page ? "blur":""}`}>
          <Suspense fallback={null}>
            <Home setPage={setPage}/>
          </Suspense>
        </div>

        <div className={`right-panel ${page ? "show":""}`}>

          <Suspense fallback={null}>

            {page==="login" && <Login setPage={setPage}/>}

            {page==="signup" && <Signup setPage={setPage}/>}

            {page==="forgot" && <ForgotPassword setPage={setPage}/>}

          </Suspense>

        </div>

      </div>

    </div>
  );
}