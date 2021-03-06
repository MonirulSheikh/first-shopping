import axios from "axios";

// export const createOrder = (order) => async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: "ORDER_CREATE_REQUEST",
//       });
//       const {
//         userLogin: { userInfo },
//       } = getState();
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:userInfo.token
//         },
//       };
//       const { data } = await axios.post("/api/orders", order, config);
//       dispatch({ type: "ORDER_CREATE_SUCCESS", payload: {mess:"olll"} });
//     } catch (error) {
//       dispatch({
//         type: "ORDER_CREATE_FAIL",
//         payload:
//           error.response.dat
//       });
//     }
//   };

export const CreateOrder=(order)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type: "ORDER_CREATE_REQUEST",
          });
    
    const{ userLogin:{userInfo}}=getState()
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: userInfo.token
        },
    }
    
    const {data}=await axios.post("/api/orders",order,config)
    
    dispatch({ type: "ORDER_CREATE_SUCCESS", payload:data});

   
    } catch (error) {
        dispatch({
            type: "ORDER_CREATE_FAIL",
            payload:
              error.response.data.err
          });
        }
    
   
}
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "ORDER_DETAILS_REQUEST",
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:userInfo.token
      },
    };
    const { data } = await axios.get(`/api/orders/${id}`, config);
    
    localStorage.setItem("orders",JSON.stringify(data))
    dispatch({ type:"ORDER_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "ORDER_DETAILS_FAIL",
      payload:"Order not found"
        
    });
  }
};
export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "ORDER_PAY_REQUEST",
      });

      // const { userLogin:{userInfo}}=getState()
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:userInfo.token,
        },
      };
      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );
      dispatch({ type: "ORDER_PAY_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "ORDER_PAY_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };