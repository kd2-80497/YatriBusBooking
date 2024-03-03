import axios from "axios";
import { createUrl,createError, } from "./utils";

export  async function signupUser(firstName,lastName,email,password,phoneNumber){

try{
const url = createUrl('user/signup')
const body = {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    
}

const response = await axios.post(url,body)
return response.data
}catch(ex){
    return createError(ex)
}

}


export async function signinUser(email, password) {
    try {
      const url = createUrl('user/signin')
      const body = {
        email,
        password,
      }
      const response = await axios.post(url, body)
      return response.data
    } catch (ex) {
      return createError(ex)
    }
  }

  
  
  export async function forgotPassword(email) {
    try {
      const url = createUrl('user/forgotPassword');
      const body = {
        email,
      };
      const response = await axios.post(url, body);
      return response.data;
    } catch (ex) {
      return createError(ex);
    }
  }

  // export async function initiatePayment(source, destination,totalPayment,paymentDate) {
  //   try {
  //     const url = createUrl('payments/initiate'); // Adjust the URL endpoint according to your server route
  //     const body = {
  //       source,
  //       destination,
  //       paymentDate,
  //       totalPayment
  //     };
  //     const response = await axios.post(url, body);
  //     return response.data;
  //   } catch (ex) {
  //     return createError(ex);
  //   }
  // }

  export async function initiatePayment(data) {
    try {
      const url = createUrl('payments/initiate'); // Adjust the URL endpoint according to your server route
      const body = data;
      const response = await axios.post(url, body);
      return response.data;
    } catch (ex) {
      return createError(ex);
    }
  }
 



//import { createError, createUrl } from './utils'; // Assuming you have utility functions for error handling and creating URLs

// export async function submitFeedback(feedback, passengerId, busId) {
//   try {
//     const url = createUrl('/feedback'); // Adjust the endpoint as per your API
//     const body = {
//       feedback,
//       passengerId,
//       busId,
//     };

//     const response = await axios.post(url, body);
//     return response.data;
//   } catch (ex) {
//     return createError(ex);
//   }
// }