import { useState } from "react";
// import back from '../assests/back.jpg';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { passenger } from "../services/passenger";
import Navbar from "../components/Navbar";
import axios from "axios";

export function PassengerForm() {

  const [passengers, setPassengers] = useState([]);
  const bookingId = sessionStorage.getItem("bookingid");
console.log("booking"+ bookingId);
  const navigate = useNavigate();
  const numberOfSeatsToBook = parseInt(sessionStorage.getItem("nooFSeats"));
  const selectedBus = JSON.parse(sessionStorage.getItem("selectedBus"));
  const busType = sessionStorage.getItem("busType");
  const BASE_URL = "http://localhost:8080";

  const handlePassengerChange = (event, index) => {
    const { name, value } = event.target;
    const newPassengers = [...passengers];
    newPassengers[index] = {
      ...newPassengers[index],
      [name]: value,
    };

    setPassengers(newPassengers);
  };



  const handleSubmit = async (event) => {

    event.preventDefault();


    try {
      const response = await axios.post(BASE_URL + `/booking/passenger?bookingId=${bookingId}`, passengers);

      navigate(`/confirmBooking`);
    } catch (error) {
      toast.error(`${error.response.data}`);
    }

  };

  const renderPassengerForm = () => {
    const forms = [];
    for (let i = 0; i < numberOfSeatsToBook; i++) {

      forms.push(
        <div className="mx-auto col-md-6" key={i}>
          <h1
            className='<div class="card text-start">
           <img class="card-img-top" src="holder.js/100px180/" alt="Title">
           <div class="card-body">
             <h4 class="card-title">Title</h4>
             <p class="card-text">Body</p>
           </div>
         </div>'
          ></h1>

          <table className="table table-bordered col-md-6 ">

            <thead>
              <tr className="text-center">
                <th colSpan="2" >Passenger {i + 1} Details</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>First Name :</td>
                <td>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="firstName"
                    onChange={(event) => handlePassengerChange(event, i)}
                  />
                </td>
              </tr>
              <tr>
                <td>Last Name :</td>
                <td>
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="lastName"
                    onChange={(event) => handlePassengerChange(event, i)}
                  />
                </td>
              </tr>

              <tr>
                <td>Gender :</td>
                <td>
                  <select
                    className="form-select"
                    required
                    name="gender"
                    onChange={(event) => handlePassengerChange(event, i)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Age :</td>
                <td>
                  <input
                    type="number"
                    required
                    className="form-control"
                    name="age"
                    onChange={(event) => handlePassengerChange(event, i)}
                  />
                </td>
              </tr>
            </tbody>

          </table>

          <br />
          <br />



        </div>

      );



    }

    return forms;
  };


  return (
    <>
      <Navbar />
      <div className="middleContent">
        <div className="d-flex align-items-start conatiner  d-flex flex-column">
          <table className="table table-striped mx-auto col-md-3 w-50 " >
            <thead>
              <tr>
                <th colSpan="2" className="text-center">Your Selected Bus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Source :</td>
                <td>{selectedBus?.source}</td>
              </tr>
              <tr>
                <td>Destination :</td>
                <td>{selectedBus?.destination}</td>
              </tr>
              <tr>
                <td>Date :</td>
                <td>{selectedBus?.travelDate}</td>
              </tr>
              <tr>
                <td>Departure :</td>
                <td>{selectedBus?.departureTime}</td>
              </tr>
              <tr>
                <td>Arrival :</td>
                <td>{selectedBus?.arrivalTime}</td>
              </tr>
              <tr>
                <td>AC/NON-AC :</td>
                <td>{busType}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <div className="mx-auto col-md-9">{renderPassengerForm()}</div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>



    </>
  )
}
export default PassengerForm;

  //     const[firstName,setFirstName]=useState('');
  //     const[lastName,setLastName]=useState('');
  //     const[gender,setGender]=useState('');
  //     const[age,setAge]=useState('');
  //     const[seatNumber,setSeatNumber]=useState('');
  //    // const navigate = useNavigate();
  //     const  handleSubmit=async()=>{
  //       debugger;
  //         if (firstName.length === 0) {
  //             toast.warn('enter first name')
  //           } else if (lastName.length === 0) {
  //             toast.warn('enter last name')
  //           } else if (gender.length === 0  ) {
  //             toast.warn('enter gender')
  //           } else if (age.length === 0) {
  //             toast.warn('enter age')
  //           } else if (seatNumber.length === 0) {
  //             toast.warn('enter seatNumber')
  //           } 
  //           else{
  //             const result = await passenger(firstName,lastName,gender,age,seatNumber)

  //             if(result.status ==="success"){
  //                 toast.success("Passenger details added successfully")
  //               //  navigate('/')
  //             }
  //             else{
  //                 toast.error(result['error'])
  //             }
  //           }
  //        }

  //   return (
  //     <>

  //    <div className="container mt-5" >
  //       <div className="card">
  //       <img src="assests\back.jpg" className="card-img-top" alt="Bus Image" />
  //         <div className="card-body">
  //           <h1 className="card-title text-center mb-4">Passenger Details</h1>
  //       <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
  //         <div className='row'>
  //           <div className='col'></div>
  //           <div className='col'>
  //             <div className='form'>
  //               <div className='mb-3'>
  //                 <label htmlFor='firstName' className='form-label'>First Name</label>
  //                 <input
  //                   onChange={(e) => setFirstName(e.target.value)}
  //                   type='text'
  //                   className='form-control'
  //                 />
  //               </div>
  //               <div className='mb-3'>
  //                 <label htmlFor='lastName' className='form-label'>Last Name</label>
  //                 <input
  //                   onChange={(e) => setLastName(e.target.value)}
  //                   type='text'
  //                   className='form-control'
  //                 />
  //               </div>
  //               <div className='mb-3'>
  //                 <label htmlFor='gender' className='form-label'>Gender</label>
  //                 <select
  //                   onChange={(e) => setGender(e.target.value)}
  //                   className='form-select'
  //                   id='gender'
  //                 >
  //                   <option value='' disabled>Select Gender</option>
  //                   <option value='male'>Male</option>
  //                   <option value='female'>Female</option>
  //                   <option value='other'>Other</option>
  //                 </select>
  //               </div>
  //               <div className='mb-3'>
  //                 <label htmlFor='age' className='form-label'>Age</label>
  //                 <input
  //                   onChange={(e) => setAge(e.target.value)}
  //                   type='number'
  //                   className='form-control'
  //                   id='age'
  //                   min='1' // Set the minimum age (adjust as needed)
  //                   max='120' // Set the maximum age (adjust as needed)
  //                   required // Add the required attribute for form validation
  //                 />
  //               </div>
  //               <div className='mb-3'>
  //                 <label htmlFor='seatNumber' className='form-label'>Seat Number</label>
  //                 <input
  //                   onChange={(e) => setSeatNumber(e.target.value)}
  //                   type='number'
  //                   placeholder=''
  //                   className='form-control'
  //                 />
  //               </div>
  //               <div className='mb-3'>
  //                 {/* <div>
  //                   Already got an account? <Link to='/'>Sign in here</Link>
  //                 </div> */}
  //                 <button type='submit'className='btn btn-primary mt-4'>
  //                   Add Passenger
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //           <div className='col'></div>
  //         </div>
  //       </form>
  //       </div>
  //       </div>
  //       </div>
  //     </>
  //   );
