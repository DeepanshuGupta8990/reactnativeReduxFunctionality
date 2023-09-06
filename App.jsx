import { View, Text, Button } from 'react-native'
import React from 'react'
import Product from './components/Product'
import Header1 from './components/Header1'

const App = () => {

  const products = [
    {
      name:"Samsung",
      color:'white',
      price:30000
    },
    {
      name:"Apple",
      color:'white',
      price:140000
    },
    {
      name:"Realme",
      color:'white',
      price:20000
    }
  ]

  return (
    <View>
      <Text>ReduxWithReactantiveApp</Text>
      <Header1/>
      <View style={{display:'flex',flexDirection:'column',gap:10}}>
      {
        products.map((item)=>{
          return(
            <View key={item.name}>
              <Product item={item}/>
            </View> 
          )
        })
      }
      </View>

    </View>
  )
}

export default App  

// to use redux - install these three libraries : redux,react-redux,redux toolkit 