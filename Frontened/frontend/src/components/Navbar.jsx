import { Link, useNavigate } from 'react-router-dom'
import photo from '../assets/Yatri-logos_white.png'

//  import photo from '';
export function Navbar(){
    const navigate = useNavigate();
    const onLogout =()=>{
        sessionStorage.removeItem('token')
        navigate('/');
    }
    return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark"> 
  <div className="container-fluid">
   <a className='navbar-brand' href="#">
   <img src={photo} alt="Yatri" width="300" height="100" />
</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">

          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li>
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
          </li>
          <li>
          <Link className="nav-link active" aria-current="page" to="/contact">Contact US</Link>
          </li>
          <li>
          <button onClick={onLogout} className="nav-link active" aria-current="page" >Logout</button>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
    
    </>)
}

export default Navbar;