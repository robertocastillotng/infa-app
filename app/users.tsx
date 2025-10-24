import { useUsers } from "@/features/users/usersHook";
import { RootState } from "@/store";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator, Button, Card } from "react-native-paper";
import { useSelector } from "react-redux";



export default function Login(){
    const {usersQuery} = useUsers()
    const usersState = useSelector((state:RootState) => state.users)
    if (usersQuery.isLoading) {
       return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><ActivityIndicator/></View>
    }
    if (usersQuery.isError) {
       return <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
        <Text>Ocurrio un error al cargar usuarios: {JSON.stringify(usersQuery.error)}</Text>
       </View>
    }
    return (
        <View style={{flex:1,padding:10}}>
            <FlatList
            keyExtractor={(item)=>item.id.toString()}
            data={usersState.users}
            style={{padding:5}}
            renderItem={({item: user})=>(
                <Card style={{marginBottom:10}}>
                    <Card.Title title={user.name} subtitle={user.email} />
                    <Card.Actions>
                        <Button >Eliminar</Button>
                    </Card.Actions>
                </Card>
            )}
            />

        </View>
    )
}