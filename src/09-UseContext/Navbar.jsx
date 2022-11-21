import { Link } from "react-router-dom"



export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" >Navbar</Link>    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className="nav-link" >Login</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link" >About</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
