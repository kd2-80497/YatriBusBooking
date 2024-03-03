import axios from "axios";
import { createError,createUrl } from "./utils";

export  async function getAllSource(){

try{
const url = createUrl('bus/source')




const response = await axios.get(url)
return response.data
}catch(ex){
    return createError(ex)
}

}