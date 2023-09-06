import { View, Text,Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import { addToCart,minusToItem,plusToItem,removeToCart } from './redux/action';
import { useDispatch,useSelector } from 'react-redux';

const Product = (props) => {
    const [isAdded,setIsAdded] = useState(false);
    const dispatch = useDispatch();
    const {item} = props;
    const handleAddToCart = ()=>{
       console.log(item.name);
       dispatch(addToCart(item));
    }
    const handleRemoveToCart = ()=>{
       console.log(item.name);
       dispatch(removeToCart(item));
       setIsAdded(false);
      }
      const handlePlus = ()=>{
        dispatch(plusToItem(item.name));
      }
      const handeMinus = ()=>{
        if(cardItems[item.name]===1){
        dispatch(removeToCart(item));
        setIsAdded(false);
      }else{
        dispatch(minusToItem(item.name));
      }
    }
    const cardItems = useSelector((state)=>{return(state.reducer)})
    useEffect(()=>{
      if(cardItems[item.name] && Object.keys(cardItems).length){
       if(cardItems[item.name]){
        setIsAdded(true)
       }
      }
    },[cardItems])
  return (
    <View style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',borderBottomColor:'black',borderBottomWidth:2,paddingBottom:5}} key={item.name}>
    <Text>{item.name}</Text>
    <Text>{item.price}</Text>
    <Text>{item.color}</Text>
{
    isAdded ? 
    (
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',gap:5,flexDirection:'row'}}>
       <Button title='Remove to cart'  onPress={handleRemoveToCart}/>
       <Button title='+' onPress={handlePlus}/>
        <Text style={{backgroundColor:'yellow',padding:8,fontSize:16}}>{cardItems[item.name]}</Text>
       <Button title='-' onPress={handeMinus}/>
      </View>
    )
           : 
    (<Button title='Add to cart' onPress={handleAddToCart}/>) 
}
  </View>
  )
}

export default Product