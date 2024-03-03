import { useEffect, useState } from "react";
import { getAllSource } from "../services/city";
import Navbar from "../components/Navbar";


import InputForm from "../components/InpuForm";
import BusDetails from "../components/BusDetails";
export function Bus(){
   
    const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");


  
  const handleSubmit = ({ source, destination }) => {
    setSource(source);
    setDestination(destination);
  };
    return (<>
        <Navbar/>
        <div className="container">


        <div className="d-flex  flex-column align-items-center">
      <h1  className="m-7">Bus Information</h1>
      <InputForm onSubmit={handleSubmit} />
      {source && destination && (
        <BusDetails source={source} destination={destination} />
      )}
    </div>

</div>
 </>
        )

      }


export default Bus;










// import { useState } from "react";

// function Feedback() {
//   const [feedback, setFeedback] = useState("");
//   const [passengerId, setPassengerId] = useState("");
//   const [busId, setBusId] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form submitted:", { feedback, passengerId, busId });
//     // You can add further logic to send the feedback data to your backend/API here
//   };



//   mport { useState } from "react";

// function Feedback() {
//   const [feedback, setFeedback] = useState("");
//   const [passengerId, setPassengerId] = useState("");
//   const [busId, setBusId] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form submitted:", { feedback, passengerId, busId });
//     // You can add further logic to send the feedback data to your backend/API here
//   };
//   return (
//     <div className="container">
//       <h2 className="mt-5 mb-3">Feedback Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="feedback" className="form-label">
//             Feedback:
//           </label>
//           <textarea
//             className="form-control"
//             id="feedback"
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             required
//           />
        {/* </div>
        <div className="mb-3">
          <label htmlFor="passengerId" className="form-label">
            Passenger ID:
          </label>
          <input
            type="number"
            className="form-control"
            id="passengerId"
            value={passengerId}
            onChange={(e) => setPassengerId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="busId" className="form-label">
            Bus ID:
          </label>
          <input
            type="number"
            className="form-control"
            id="busId"
            value={busId}
            onChange={(e) => setBusId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Feedback; */}