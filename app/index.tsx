import { getPopularMovies, searchMovies, } from "@/api/movies";
import { Movie } from "@/api/movies/types";

import { setCurrentMovie, setMovies } from "@/features/movies/movieSlice";
import { RootState } from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Button, Card, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";



export default function Index(){
    const inputRef = useRef<TextInput>(null);
    const [movieSearch,setMovieSearch] = useState('')
    const [buscar,setBuscar] = useState(false)
    const popularMoviesQuery = useInfiniteQuery({
        queryKey:['movies'],
        initialPageParam: 1, 
        queryFn:({pageParam = 1})=> movieSearch.trim() ? searchMovies(movieSearch.trim(), pageParam) : getPopularMovies(pageParam),
        getNextPageParam:(lastpage)=>{
            if (lastpage.page <  lastpage.total_pages) {
               return  lastpage.page + 1
            }
            return undefined
        },
        enabled: movieSearch === '' || buscar
    })
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log("se disparo el useffect")
        if (popularMoviesQuery.data?.pages) {
            dispatch(setMovies(popularMoviesQuery.data?.pages.flatMap((page) => page.results)))
        }
    },[popularMoviesQuery.data,dispatch])

    const moviesState = useSelector((state:RootState) => state.movies)
    const router = useRouter()
    function hadleViewMovie(movie:Movie) {
        dispatch(setCurrentMovie(movie)) 
        router.navigate("/movie")
    }
    function searchMovie() {
        setBuscar(false)
        popularMoviesQuery.refetch() // dispara la busqueda 
    }
    function searchPopularMovies() {
        setMovieSearch('') 
        return popularMoviesQuery.refetch()
    }
    function handleBuscar() {
        setBuscar(true)
        inputRef.current?.focus()
    }
    if (popularMoviesQuery.isLoading) {
       return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><ActivityIndicator/></View>
    }
    if (popularMoviesQuery.isError) {
       return <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
        <Text>Ocurrio un error al cargar las peliculas: {JSON.stringify(popularMoviesQuery.error?.message )}</Text>
       </View>
    }
    return (
    <SafeAreaView style={{flex:1,padding:10}}>
        <View>
            <TouchableOpacity onPress={searchPopularMovies}>
                <Text style={{fontSize:25,marginBottom:10}}>Movies</Text>
            </TouchableOpacity>
            <Searchbar
            placeholder="Buscar pelicula..."
            style={{marginBottom:10}}
            onChangeText={(text)=>setMovieSearch(text)}
            value={movieSearch}
            onSubmitEditing={searchMovie} // <-- aquí se captura el Enter
            />

            <FlatList
            keyExtractor={(item,idx)=> idx.toString()}
            data={moviesState.movies}
            style={{padding:5}}
            onEndReached={() => popularMoviesQuery.hasNextPage && popularMoviesQuery.fetchNextPage()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                popularMoviesQuery.isFetchingNextPage ? <ActivityIndicator style={{ marginVertical: 20 }} /> : null
            }
            renderItem={({item: movie})=>(
                <TouchableOpacity onPress={()=>hadleViewMovie(movie)}>
                    <Card style={{marginBottom:10}} >
                        <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` }} />
                        <Card.Title title={movie.title} subtitle={movie.release_date} />
                        <Card.Actions>
                            <Button>Ver</Button>
                        </Card.Actions>
                    </Card>
                </TouchableOpacity>
            )}
            refreshing={popularMoviesQuery.isLoading}
            onRefresh={searchPopularMovies}
            />

        </View>
    </SafeAreaView>
    )
}