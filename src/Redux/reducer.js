
import React from 'react'
import {GET_DATA_REQ,GET_DATA_SUC,GET_DATA_FAL, GET_SINGLE_REQ, GET_SINGLE_SUC, GET_SINGLE_FAL,ADD_CART_SUC,ADD_CART_FAL,ADD_CART_REQ,GET_CART_REQ,GET_CART_SUC,GET_CART_FAL} from"./action"

const initstate={
    isLoading:false,
    isError:false,
    currentproduct:{},
    Data:[],
    cart:[]
}

function reducer(store = initstate,action) {
    const {type,payload} = action
  switch(type){
      case GET_DATA_REQ :
        return{
            ...store,
            isLoading:true,
            isError:false,
        }
        case GET_DATA_SUC :
        return{
            ...store,
            isLoading:false,
            isError:false,
            Data:payload
        }
        case GET_DATA_FAL :
        return{
            ...store,
            isLoading:true,
            isError:false,
        }
        case GET_SINGLE_REQ :
            return{
                ...store,
                isLoading:true,
                isError:false,
        }
        case GET_SINGLE_SUC :
            return{
                ...store,
                isLoading:false,
                isError:false,
                currentproduct:payload
        }
         case GET_SINGLE_FAL :
            return{
                ...store,
                isLoading:true,
                isError:false,
        }
        case ADD_CART_REQ :
        return{
            ...store,
            isLoading:true,
            isError:false,
        }
        case ADD_CART_SUC :
        return{
            ...store,
            isLoading:false,
            isError:false,
            cart:[...store.cart,payload]
        }
        case ADD_CART_FAL :
        return{
            ...store,
            isLoading:true,
            isError:false,
        }
        case GET_CART_REQ :
        return{
            ...store,
            isLoading:true,
            isError:false,
        }
        case GET_CART_SUC :
        return{
            ...store,
            isLoading:false,
            isError:false,
            cart:[...payload]
        }
        case GET_CART_FAL :
        return{
            ...store,
            isLoading:true,
            isError:false,
        }
        default:
            return{
                ...store
            }
  }
}

export default reducer