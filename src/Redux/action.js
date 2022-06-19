import axios from "axios";

export const  GET_DATA_REQ = "GET_DATA_REQ";
export const  GET_DATA_SUC="GET_DATA_SUC";
export const GET_DATA_FAL="GET_DATA_REQ";

export const  GET_SINGLE_REQ = "GET_SINGLE_REQ";
export const  GET_SINGLE_SUC="GET_SINGLE_SUC";
export const GET_SINGLE_FAL="GET_SINGLE_REQ";

export const  ADD_CART_REQ = "ADD_CART_REQ";
export const  ADD_CART_SUC="ADD_CART_SUC";
export const ADD_CART_FAL="ADD_CART_REQ";

export const  GET_CART_REQ = "GET_CART_REQ";
export const  GET_CART_SUC="GET_CART_SUC";
export const GET_CART_FAL="GET_CART_REQ";

export const  REMOVE_CART_REQ = " REMOVE_CART_REQ";
export const   REMOVE_CART_SUC=" REMOVE_CART_SUC";
export const  REMOVE_CART_FAL=" REMOVE_CART_REQ";




export const getdatarequest=()=>{
    return{
        type:GET_DATA_REQ
    }
}
export const getdatasuccess=(payload)=>{
    return{
        type:GET_DATA_SUC,
        payload
    }
}
export const getdatafail=(payload)=>{
    return{
        type:GET_DATA_FAL,
        payload
    }
}


export const getsinglerequest=()=>{
    return{
        type:GET_SINGLE_REQ
    }
}
export const getsinglesuccess=(payload)=>{
    return{
        type:GET_SINGLE_SUC,
        payload
    }
}
export const getsinglefail=(payload)=>{
    return{
        type:GET_SINGLE_FAL,
        payload
    }
}

export const addcartrequest=()=>{
    return{
        type:ADD_CART_REQ
    }
}
export const addcartsuccess=(payload)=>{
    return{
        type:ADD_CART_SUC,
        payload
    }
}
export const addcartfail=(payload)=>{
    return{
        type:ADD_CART_FAL,
        payload
    }
}

export const getcartrequest=()=>{
    return{
        type:GET_CART_REQ
    }
}
export const getcartsuccess=(payload)=>{
    return{
        type:GET_CART_SUC,
        payload
    }
}
export const getcartfail=(payload)=>{
    return{
        type:GET_CART_FAL,
        payload
    }
}

export const removecartrequest=()=>{
    return{
        type:REMOVE_CART_REQ
    }
}
export const removecartsuccess=(payload)=>{
    return{
        type:REMOVE_CART_SUC,
        payload
    }
}
export const removecartfail=(payload)=>{
    return{
        type:REMOVE_CART_FAL,
        payload
    }
}

export const Getdata=()=>{
    return(dispatch)=>{
        dispatch(getdatarequest());
        axios(`http://localhost:8080/products`).then(res=>dispatch(getdatasuccess(res.data)))
        .catch(err=>dispatch(getdatafail(err)))
    }
}

export const Singledata=(id)=>{
    return(dispatch)=>{
        dispatch(getsinglerequest());
        axios(`http://localhost:8080/products/${id}`).then(res=>dispatch(getsinglesuccess(res.data)))
        .catch(err=>dispatch(getsinglefail(err)))
    }
}


export const Addcartdata=(product)=>{
    return(dispatch)=>{
        dispatch(addcartrequest());
        axios.post(`http://localhost:8080/cart`,product).then(res=>dispatch(addcartsuccess(res.data)))
        .catch(err=>dispatch(addcartfail(err)))
    }
}

export const Getcartdata=()=>{
    return(dispatch)=>{
        dispatch(getcartrequest());
        axios.get(`http://localhost:8080/cart`).then(res=>dispatch(getcartsuccess(res.data)))
        .catch(err=>dispatch(getcartfail(err)))
    }
}

export const Removecartdata=(id)=>{
    return(dispatch)=>{
        dispatch(removecartrequest());
        axios.delete(`http://localhost:8080/cart/${id}`).then(res=>dispatch(removecartsuccess(res.data)))
        .then(()=>dispatch(Getcartdata()))
        .catch(err=>dispatch(removecartfail(err)))
    }
}