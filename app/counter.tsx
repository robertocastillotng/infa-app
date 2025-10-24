import { decrement, increment } from "@/features/counter/CounterSlice";
import { addTodo, deleteTodo } from "@/features/todos/todosSlice";
import { RootState } from "@/store";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, IconButton, List, MD3Colors, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
  const counter = useSelector((state:RootState) => state.counter.value);
  const todos = useSelector((state:RootState) => state.todos);
  const dispatch = useDispatch()
  const handleDecrement = () => {
    // Dispatch increment action
    dispatch(decrement())
  }
  const handleIncrement = () => {
    // Dispatch increment action
    dispatch(increment())
  }
  const [todoText,setTodoText] = useState('')
  function handleAddTodo() {
    dispatch(addTodo(todoText)) 
    setTodoText('')
  }
  function handleDeleteTodo(id:number) {
    dispatch(deleteTodo(id)) 
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',padding:10}}>
      <IconButton
        icon="minus"
        iconColor={MD3Colors.primary50}
        size={20}
        onPress={handleDecrement}
      />
      <Text>{counter.toString()}</Text>
      <IconButton
        icon="plus"
        iconColor={MD3Colors.primary50}
        size={20}
        onPress={handleIncrement}
      />
      </View>
      <View style={{padding:10}}>
        <TextInput
          value={todoText}
          mode="outlined"
          onChangeText={(text)=>setTodoText(text)}
        />
        <Button icon="plus" 
          onPress={handleAddTodo}
         >Agregar</Button>
        <List.Section>
          {
            todos.map(todo=>(
              <List.Item 
              key={todo.id} 
              title={todo.text}
              left={()=> <List.Icon  icon="folder" />}
              right={()=> <IconButton icon="delete" onPress={()=>handleDeleteTodo(todo.id)}/>}
              />
            ))
          }
        </List.Section>
      </View>
    </View>
  );
}
