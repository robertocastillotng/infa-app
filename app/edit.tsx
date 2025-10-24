import { useUsers } from "@/features/users/usersHook";
import { RootState } from "@/store";
import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useSelector } from "react-redux";



export default function Login(){
    const usersState = useSelector((state:RootState)=>state.users)
    const [email,setEmail] = useState(usersState.currentUser.email)
    const [name,setName] = useState(usersState.currentUser.name)
    const {} = useUsers()
    function handleSave() {
        
    }
    return (
        <View style={{flex:1,padding:25}}>
            <TextInput
                value={name}
                onChangeText={(text)=> setName(text)}
                placeholder="Name"
            />
            <TextInput
                value={email}
                onChangeText={(text)=> setEmail(text)}
                placeholder="Email"
            />
            <Button onPress={handleSave} >Guardar</Button>
        </View>
    )
}