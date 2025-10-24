import { getMovieDetails } from "@/api/movies";
import { RootState } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { Image, StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Movie() {
    const movieState = useSelector((state:RootState)=>state.movies)
    const movieDetailQuery = useQuery({
        queryKey:['movieDetail',movieState.currentMovie.id],
        queryFn: ()=>getMovieDetails(movieState.currentMovie.id)
    })
    if (movieDetailQuery.isLoading) {
       return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><ActivityIndicator/></View>
    }
    if (movieDetailQuery.isError) {
       return <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
        <Text>Ocurrio un error al cargar las peliculas: {JSON.stringify(movieDetailQuery.error.message)}</Text>
       </View>
    }
    return (
        <View style={{flex:1,padding:10}}>
        <Text style={{...styles.text,fontSize:30, marginBottom:10}}>{movieDetailQuery.data?.title}</Text>
         <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${movieDetailQuery.data?.backdrop_path}` }}
            style={{ width: '100%', height: 200 , borderRadius:5}}
            resizeMode="cover"
        />
        <Text style={styles.text}>{movieDetailQuery.data?.overview}</Text>
        <Text style={styles.text}>Calificación:</Text>
        <Text style={styles.text}>{movieDetailQuery.data?.vote_average}</Text>

        </View>
    ) 
}

const styles = StyleSheet.create({
    text:{color:"black",fontSize:20, marginTop:10}
})