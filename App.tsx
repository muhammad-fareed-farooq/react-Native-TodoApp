import React, { useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Task from "./Component/Task";

export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAdd = () => {
    Keyboard.dismiss()
    if (task) {
      setTaskItems([...taskItems, task])
      setTask(null)
    }
  }

  const completetask = (index)=>{
    let itemsCopy =[...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)

  }

  const deleteAll =()=>{
    let itemsCopy = []
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={{
          backgroundColor: "#0AD6A0",
          marginTop: 25,
          color: "white",
          textAlign: "center",
          fontSize: 20,
          padding: 10,
          fontWeight: "700"
        }}>TODO App</Text>
        <TouchableOpacity style={styles.removeall} onPress={()=>deleteAll()}>
          <Text style={styles.removealltext}>remov</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.todocard}>
                  <TouchableOpacity key={index} onPress={()=>completetask(index)}>
                    <Image source={require("./assets/delete.png")} style={{width:10,height:10}}/>
                  </TouchableOpacity>
                  <Task text={item}/>
                </TouchableOpacity>
          )
            })}


        </View>
    </View>
      </ScrollView >


    <KeyboardAvoidingView style={styles.writeTaskWrapper}>
      <TouchableOpacity style={styles.Addbtn} onPress={() => handleAdd()}>
       <Text style={{backgroundColor:"black",color:"white"}}>Add</Text>
      <TextInput placeholder="Enter Your Todo" style={styles.inputbox} value={task} onChangeText={(text) => { setTask(text) }} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  removeall: {
    flex: 0,
    justifyContent: "flex-end",
    width: "100%",
    flexDirection: "row",
    margin: 10

  },
  removealltext: {
    fontSize: 17,
    fontWeight: '700',
    backgroundColor: "#FF5757",
    color: "white",
    width: 110,
    textAlign: "center",
    borderRadius: 10,
    marginRight: 10,
    padding: 5

  },
  writeTaskWrapper:{
    position:"relative",
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    // bottom:0
  },
  Addbtn:{
    // fontSize:20,
    // width:5,
    // height:5
  },
  inputbox:{
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation:40
  },
  todocard:{
    backgroundColor: "#fff",
    // padding: ,
    borderRadius: 10,
    elevation:40
  }
})