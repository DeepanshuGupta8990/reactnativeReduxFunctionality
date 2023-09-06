import { ADD_TO_CART, MINUS, PLUS } from "./constants";
import { REMOVE_TO_CART  } from "./constants";

export function addToCart(item){
    return{
        type:ADD_TO_CART ,
        payload:item
    }
}
export function removeToCart(item){
    return{
        type:REMOVE_TO_CART ,
        payload:item
    }
}
export function plusToItem(item){
    return{
        type:PLUS,
        payload:item
    }
}
export function minusToItem(item){
    return{
        type:MINUS,
        payload:item
    }
}