export const orderCreateReducer = (state = {loading:false,orders:{},success:false}, action) => {
    switch (action.type) {
      case "ORDER_CREATE_REQUEST":
        return {...state, loading: true };
      case"ORDER_CREATE_SUCCESS":
        return { ...state,loading: false, success:true, orders:action.payload };
      case "ORDER_CREATE_FAIL":
        return {...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const orderDetailsReducer = (
    state = { loading: true, orders:{},user:{},orderItems:[],shippingAddress:{} },
    action
  ) => {
    switch (action.type) {
      case "ORDER_DETAILS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ORDER_DETAILS_SUCCESS":
        return {
          ...state,
          loading: false,
          orders: action.payload,
        user:action.payload.User,
        orderItems:action.payload.orderItem,
        shippingAddress:action.payload.shippingAddress
        };
      case "ORDER_DETAILS_FAIL":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
      case "ORDER_PAY_REQUEST":
        return {
          loading: true,
        };
      case "ORDER_PAY_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "ORDER_PAY_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      case "ORDER_PAY_RESET":
        return {};
      default:
        return state;
    }
  };