import axios from "axios";
import { createError,createUrl } from "./utils";

export  async function passenger(firstName,lastName,gender,age,seatNumber){
var bookId=1;
try{
const url = createUrl('passenger')
const body = {
    firstName,
    lastName,
    gender,
    age,
   seatNumber,
   bookId,
    
    
}



const response = await axios.post(url,body)
return response.data
}catch(ex){
    return createError(ex)
}

}