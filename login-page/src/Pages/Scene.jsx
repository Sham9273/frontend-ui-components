import { OrbitControls } from "@react-three/drei";

export default function Scene(){

  return(

    <>

      <ambientLight intensity={0.6}/>
      <directionalLight position={[5,5,5]} intensity={1.5}/>

      <OrbitControls enableZoom={false} enableRotate={false}/>

    </>

  )
}