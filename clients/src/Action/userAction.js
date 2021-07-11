import axios from "axios";


export const loginAction=(email, password1)=>async(dispatch)=>{
try {
    dispatch({ type:" USER_LOGIN_REQUEST" });
const config={headers:{ "Content-Type": "application/json" }}
// const {data}=axios.post("/api/users/login",{email,passwor},config)




const {data}=await axios.post("/api/users/login",{email,password1},config)
dispatch({type: "USER_LOGIN_SUCCESS",
    payload: data})
    // console.log("actiom")
    // console.log(data)
    localStorage.setItem("userInfo", JSON.stringify(data)); 
} catch (error) {


    dispatch({
        type: "USER_LOGIN_FAILS",
        payload:
        error.response.data.err
      });
    
    // console.log("Action err:",error.response.data.err)
}    
}
export const logout=()=>(dispatch)=>{
    localStorage.removeItem("userInfo")
    dispatch({type:"USER_LOGOUT"})
}

export const registerAction=(email,password,conformPassword,name)=>async(dispatch)=>{
    try {
        dispatch({type:"USER_REGISTER_REQUEST"})
        const config={headers:{"Content-Type":"application/json"}}
const {data}=await axios.post("/api/users",{email,password,conformPassword,name},config)
dispatch({type:"USER_REGISTER_SUCCESS",payload:data})
localStorage.setItem("userInfo", JSON.stringify(data));
        
    } catch (error) {
        dispatch({type:"USER_REGISTER_FAIL",payload:error.response.data.message})
    }
}
export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "USER_DETAILS_REQUEST",
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: userInfo.token,
        },
      };
      const { data } = await axios.get(`/api/users/${id}`, config);
  
      dispatch({
        type: "USER_DETAILS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "USER_DETAILS_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };