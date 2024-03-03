
import Navbar from "../components/Navbar";
import '../styles/HomeStyles.css';
import { Link, useNavigate } from 'react-router-dom'

export function Home(){
    const navigate = useNavigate();
    const handleClick = () => {
        console.log('Button clicked!');
        navigate('/bus')
      };

    return (<>
    <Navbar/>
    <div className="home">
    <div className="container">
       
    <h1 className='title' class="text-xxl-start">WELCOME TO YATRI</h1>
    <div className="d-flex justify-content-start">
    <button onClick={handleClick} className="btn btn-dark btn-sm z-3 position-absolute p-3 rounded-3 mx-3  " >Book Ticket</button>
   </div>
    </div>
    
    </div>
    </>)

}

export default Home ;
