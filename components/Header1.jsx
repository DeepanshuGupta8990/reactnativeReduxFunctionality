import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header1 = () => {
  const cartData = useSelector((state)=>{
    return (state.reducer)
  })
  const [cartitems,setCartItems] = useState(0)
  console.log(cartData)
  useEffect(()=>{
      setCartItems(Object.keys(cartData).length)
  },[cartData])
  return (
    <View style={{width:'100%',height:20,backgroundColor:'orange',position:'relative',height:30}}>
      <Text style={{position:'absolute',right:10,top:5}}>{cartitems}</Text>
    </View>
  )
}

export default Header1