

export const productListReducer=(state={products:[]},action)=>{
switch (action.type) {
    case "PRODUCT_LIST-REQUEST":return{
        Loading:true
    }
     case "PRODUCT_LIST_SUCCESS" : return{
Loading:false,products:action.payload
     } 
        case "PRODUCT_LIST_FAILS" :return{
            Loading:false,error:action.payload
        } 

    default:return state
        
}


}

export const prodoductDetailReducer=(state={product:{review:[]},loading:false,error:""},action)=>{
switch(action.type){
    case "PRODUCT_DETAILS_REQUEST":return{
        ...state,loading:true
    };
    case "PRODUCT_DETAILS_SUCCESS":return{
        ...state,loading:false,product:action.payload
    }
case "PRODUCT_DETAILS_FAILS":return{
    ...state,error:action.payload,loading:false
}
default:return state
}
}