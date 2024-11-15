import { API_BASE_URL } from "../APIConfig"
import { REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "./AuthActionType"
import axios from "axios"
import Swal from 'sweetalert2'







//user register
export const userRegister = (registerData)=>async(dispatch)=>{
    try{
        const {data} = await axios.post(`${API_BASE_URL}/api/register`,registerData)


        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Signed up successfully",
            showConfirmButton: false,
            timer: 1500
          });
      

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
        }
        dispatch({type:REGISTER_USER_SUCCESS,payload:data})

    }catch(error){
        console.log("error",error)
        dispatch({type:REGISTER_USER_FAILURE,payload:error.response.data.message})
        Swal.fire({
            title:"SignUp failed",
            text: error.response.data.message,
            icon: "error"
        })
    }

    
}
