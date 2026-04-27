export default function Home({setPage}){

  return(

    <div>

      <h1>Welcome</h1>

      <button
        className="open-login-btn"
        onClick={()=>setPage("login")}
      >
        Open Login
      </button>

    </div>

  )
}