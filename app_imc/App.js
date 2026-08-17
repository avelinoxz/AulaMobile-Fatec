import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import {useState} from "react";

export default function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  var imc = weight / (height * height);

  const IMCcalculate = () => {

    alert(imc.toFixed(2));
  };

  return (
    <View style={style.app}>
      <Text style={style.title}>
        IMC
      </Text>

      <TextInput style={style.campo} placeholder={"Weight..."} keyboardType="numeric" placeholderTextColor="#B0B0B0" value={weight} onChangeText={setWeight}/>

      <TextInput style={style.campo} placeholder={"height..."} keyboardType="numeric" placeholderTextColor="#B0B0B0" value={height} onChangeText={setHeight}/>

      <Button title="calculate" color="red" onPress={IMCcalculate}>
      
      </Button>

      <Text style={style.result}>
        {imc.toFixed(2)}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 50,
    color: '#80EF80',
    fontWeight: "bold"
  },
  result: {
    fontSize: 75,
    color: 'blue',
    fontWeight: "bold"

  },
  app:{
    flex:1,
    backgroundColor: "#A47DAB",
    justifyContent:"center",
    alignItems: "center",
  },
  campo:{
    width: 200,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontStyle: "italic",
  },
});
