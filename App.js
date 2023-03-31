import { useState } from "react"
import { Pressable } from "react-native"
import {Image,StyleSheet,Text,View} from "react-native"
import diceOne from "./assets/dice1.png"
import diceTwo from "./assets/dice2.png"
import diceThree from "./assets/dice3.png"
import diceFour from "./assets/dice4.png"
import diceFive from "./assets/dice5.png"
import diceSix from "./assets/dice6.png"



const App=()=>{
  const[diceImg,setdiceImg] = useState(diceOne)
  const onPressHandler =()=>{
    const randomCall = Math.floor(Math.random()*6+1)
    switch(randomCall){
      case 1:
      setdiceImg(diceOne)
      break;
    case 2:
      setdiceImg(diceTwo)
      break;
      case 3:
        setdiceImg(diceThree)
        break;
        case 4:
          setdiceImg(diceFour)
          break;
          case 5:
            setdiceImg(diceFive)
            break;
            case 6:
              setdiceImg(diceSix)
              break;
            }
  }
  return <View style={style.Deco}>
     <Text>Dice Simulator</Text>
      <Image source ={diceImg} style={style.img}/>
      <Pressable onPress = {onPressHandler} style={{padding:10}}>
<Text style ={style.playBtn}> Start
</Text>
</Pressable>
  </View>
}

const style = StyleSheet.create({
  Deco:{
    flex:1,
  
    justifyContent:"center",
    alignItems:"center",
  },
  img:{
 
    width:150,
    height:150
  },
  playBtn:{
    
    backgroundColor:"red"
  }
})
export default App