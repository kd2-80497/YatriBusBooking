import { useState } from "react";
//import axios from "axios";
import { initiatePayment } from '../services/user'
function Payment() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [paymentDate, setPaymentDate] = useState('');
  const [totalPayment, setTotalPayment] = useState(0);
  

// Create an object using the state variables
const paymentObject = {
  userid:1,
  source: source,
  destination: destination,
  paymentStatus: paymentStatus,
  // paymentDate: paymentDate,
  totalPayment: totalPayment
};
  const handleSubmit = (event) => {

    
    // debugger;
    event.preventDefault();
    console.log("Form submitted:",paymentObject);
    initiatePayment(paymentObject).then((response)=>{
      console.log(response.data);
    }).catch((err)=>{
      console.log(err.data);
      
    })
  };

  return (

    <div className="container">
      <h2 className="mt-5 mb-3">Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="source" className="form-label">Source:</label>
          <input type="text" className="form-control" id="source" value={source} onChange={(e) => setSource(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="destination" className="form-label">Destination:</label>
          <input type="text" className="form-control" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="paymentStatus" checked={paymentStatus} onChange={(e) => setPaymentStatus(e.target.checked)} />
          <label className="form-check-label" htmlFor="paymentStatus">Payment Status</label>
        </div>
        <div className="mb-3">
          <label htmlFor="paymentDate" className="form-label">Payment Date:</label>
          <input type="date" className="form-control" id="paymentDate" value={paymentDate} onChange={(e) => setPaymentDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="totalPayment" className="form-label">Total Payment:</label>
          <input type="number" className="form-control" id="totalPayment" value={totalPayment} onChange={(e) => setTotalPayment(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Payment;