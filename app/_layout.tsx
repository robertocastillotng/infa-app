import store from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <Stack>
            <Stack.Screen name="index" options={{headerShown:false}} />
            <Stack.Screen name="movie" options={{headerTitle:"Movie"}}/> 
          </Stack>
        </PaperProvider>
      </QueryClientProvider>
    </Provider>
  );
}
