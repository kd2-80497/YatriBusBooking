import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

function ConfirmBooking(){

const [data,setData] = useState(null);
const bookingid= sessionStorage.getItem("bookingid");
const BASE_URL = "http://localhost:8080";
// const token = sessionStorage.getItem("jwtToken");

const navigate = useNavigate();

useEffect(()=>{

axios.get(BASE_URL+`/booking/confirm?bookingid=${bookingid}`)
.then((response)=>{
    setData(response.data);
    sessionStorage.setItem("totalFare",response.data.totalPayment);
})
.catch((error)=>{
    toast.error(`${error.response.data}`); 
});

    

},[bookingid]);//token bhi ayega

const handleConfirmation = () => {
    navigate("/checkout");
  }

 return (

    <>
    <Navbar/>
    
    <div className=" container middleContent">
        <h2 className="text-center p-4">Booking Confirmation</h2>
        {data && (
          <>
            <div className="row">
              <div className="col-md-6">
                <h3>Bus Details : </h3>
                <br />
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Bus No : </td>
                      <td>{data.busDto.busNo}</td>
                    </tr>

                    <tr>
                      <td>Source : </td>
                      <td>{data.busDto.source}</td>
                    </tr>

                    <tr>
                      <td>Destination : </td>
                      <td>{data.busDto.destination}</td>
                    </tr>

                    <tr>
                      <td>Departure Time : </td>
                      <td>{data.busDto.departureTime}</td>
                    </tr>

                    <tr>
                      <td>Arrival Time : </td>
                      <td>{data.busDto.arrivalTime}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
              <div className="col-md-5 d-flex justify-content-center align-items-center " >
                <div className="card mx-3 " style={{width: "20rem",height:"150px"}}>
                  <div className="card-header bg-primary text-white">
                    <h3 className="card-title mb-0 text-center">Total Fare : </h3>
                  </div>
                  <div className="card-body text-center">
                    <h2>RS.{data.totalPayment}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Passenger Details : </h3>
              <br />
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Passenger #</th>
                    <th>Passenger ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Booking ID</th>
                  </tr>
                </thead>
                <tbody>
                  {data.listOfPassengerDto.map((passenger, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{passenger.passengerId}</td>
                      <td>{passenger.firstName}</td>
                      <td>{passenger.lastName}</td>
                      <td>{passenger.age}</td>
                      <td>{passenger.gender}</td>
                      <td>{passenger.bookingId}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br />
            <button onClick={handleConfirmation} className="btn btn-primary">
              Confirm Now
            </button>
          </>
        )}
      </div>
    
    
    
    </>
 ) 

}
export default ConfirmBooking;