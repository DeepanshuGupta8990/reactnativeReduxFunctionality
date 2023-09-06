import { ADD_TO_CART,MINUS,PLUS,REMOVE_TO_CART } from "./constants";
const initialState = {};
export const reducer = (state=initialState,action)=>{
   const value = state[action.payload]
  switch(action.type){
    case ADD_TO_CART:
         return {
            ...state,
            [action.payload.name]:1
         }
    case REMOVE_TO_CART :
      // console.log(action.payload,'sdsadsadsad')
        let resultName = Object.keys(state).filter((product)=>{
            if(product === action.payload.name){
               return product      
            } 
        })
        let result = {...state};
        let arrayOfKeys = Object.keys(state);
        console.log(arrayOfKeys)
        for(let i=0; i<arrayOfKeys.length; i++){
         if(arrayOfKeys[i] !== resultName){
               delete result[action.payload.name]
         }
        }
        return result
      case PLUS :
         return {
            ...state,
            [action.payload]:value+1
         }
         case MINUS :
            console.log(action.payload)
          if(state[action.payload]===0){
            return state
          }else{
            return {
               ...state,
               [action.payload]:value-1
            }
          }
   
    default: 
         return state
  }
}