import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { block } from 'react-native-reanimated'

const ImageComp = () => (
   <div>
       <h1 style={{fontSize: 40, marginLeft:150}}>About Us</h1>
        <Image source = {require('C:/Users/Chhabi/MyReactProj/assets/logobook.png')}

style = {{ width: 200, 
 height: 200,
  display: block,
  marginLeft: 150
 }}
/>
   </div>
  
)


export default ImageComp

