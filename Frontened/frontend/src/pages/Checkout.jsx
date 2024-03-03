import { CLIENT_ID } from "../config";
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

// import UserService from "../services/UserService";
import Navbar from "../components/Navbar";


const Checkout = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const fare = sessionStorage.getItem("totalFare");
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8080";
  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: fare,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        sessionStorage.setItem("orderID", orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
 

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment.");
  };

const selectedBusString = sessionStorage.getItem("selectedBus");
const selectedBus = JSON.parse(selectedBusString)
console.log("selected bus = "+ selectedBus);
const selecteduser =  sessionStorage.getItem("userid");
const selectedFare = sessionStorage.getItem("totalFare")
  const param = {

    source : selectedBus.source,
    destination : selectedBus.destination,
    userid:selecteduser,
    totalPayment:selectedFare,

  };

  // useEffect(() => {
    // if (success) {
    //   toast.success("Booking Successful.", {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    //   const bid = parseInt(sessionStorage.getItem("bid"));
    //   console.log(bid);
      // const result = axios.post(BASE_URL+`/payments/initiate`,{param});
      // .then((response) => {
      //     console.log("payment status changed.");
      //   })
      //   .catch((error) => {
      //     if (error.response.status === 404 || error.response.status === 400) {
      //       toast.error(`${error.response.data}`);
      //     } else if (error.response.status === 500)
      //       toast.error(`No succesful booking yet.`);
//       //   });
// if(result.data!='error'){
// toast.success("Payment sucessfull!!");
// }

// else {
//   toast.error("Payment  Failed!!");
// }
      // UserService.pay(bid)
      //   .then((response) => {
      //     console.log("payment status changed.");
      //   })
      //   .catch((error) => {
      //     if (error.response.status === 404 || error.response.status === 400) {
      //       toast.error(`${error.response.data}`);
      //     } else if (error.response.status === 500)
      //       toast.error(`No succesful booking yet.`);
      //   });
  //     navigate("/");
  //   }
  // }, [success]);



const handlePayment=()=>{
  // const result = axios.post(BASE_URL+`payments/initiate`,{param});
  // if(result.data!='error'){
  //   toast.success("Payment sucessfull!!");
  //   }
    
  //   else {
  //     toast.error("Payment  Failed!!");
  //   }
  console.log("destination = "+selectedBus.source);
console.log("destination = "+selectedBus.destination);
    axios.get(BASE_URL+`/payments/initiate?source=${selectedBus.source}&destination=${selectedBus.destination}&userid=${selecteduser}&totalPayment=${selectedFare}`)
.then((response)=>{
  toast.success("Payment sucessfull!!");
    
})
.catch((error)=>{
  toast.error("Payment  Failed!!");
});
}

  return (
    <>
    <Navbar/>
      <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
        <div className="container middleContent">
          <div className="wrapper">
            <div className="product-info">
              <div className="product-text">
                <h1 className="text-center m-3">Payment Page</h1>
              </div>

              <div className="product-price-btn">
                <p className="text-center ">You need to pay Rs. {fare}</p>
                <div className="text-center">
                <button
                  className="buy-btn btn btn-primary"
                  type="submit"
                  onClick={handlePayment}
                >
                  Pay Here
                </button>
                </div>
              </div>
            </div>
          </div>

          <br></br>

          {show ? (
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
          ) : null}
        </div>
      </PayPalScriptProvider>
    </>
  );
};

export default Checkout;
